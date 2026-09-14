import { useMemo, useState } from "react";
import { ChevronDown, ChevronUp, Minus, Plus, X } from "lucide-react";
import { event, ticketGroups } from "../../data/event";
import eventArt from "../../assets/komplex-nye-2027.jpeg";
import { Button } from "../ui/QuicketButton";

type Props = { open: boolean; onClose: () => void };
type Quantities = Record<string, number>;

export function TicketDialog({ open, onClose }: Props) {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [quantities, setQuantities] = useState<Quantities>({});
  const [step, setStep] = useState<"tickets" | "details" | "confirmed">("tickets");
  const [errors, setErrors] = useState(false);
  const selected = useMemo(() => ticketGroups.flatMap(g => g.tickets).filter(t => (quantities[t.id] ?? 0) > 0), [quantities]);
  const count = selected.reduce((sum, t) => sum + (quantities[t.id] ?? 0), 0);
  const total = selected.reduce((sum, t) => sum + t.price * (quantities[t.id] ?? 0), 0);
  if (!open) return null;
  const money = (n: number) => `Ksh ${n.toLocaleString("en-KE")}`;
  const close = () => { setStep("tickets"); setErrors(false); onClose(); };
  return <div className="ticket-overlay" role="presentation">
    <section className="ticket-dialog" role="dialog" aria-modal="true" aria-label="Add Tickets">
      <header className="ticket-mobile-head"><Button variant="ghost" aria-label="Close ticket selection" onClick={close}><X/></Button><span>Add Tickets</span></header>
      <div className="ticket-mobile-summary"><span>Order Summary <ChevronDown/></span><strong>{money(total)}.00</strong></div>
      <div className="ticket-main">
        <div className="ticket-stepper"><span className={step === "tickets" ? "active" : "done"}><b>1</b> TICKETS</span><i/><span className={step === "details" ? "active" : ""}><b>2</b> DETAILS</span></div>
        {step === "tickets" && <div className="ticket-pick">
          <h2>Choose your tickets</h2><p>Select which ticket types you wish to purchase below.</p>
          <div className="ticket-groups">{ticketGroups.map(group => <div className="ticket-group" key={group.id}>
            <Button variant="ghost" className="ticket-group-button" onClick={() => setExpanded(expanded === group.id ? null : group.id)}><span>{group.name}</span>{expanded === group.id ? <ChevronUp/> : <ChevronDown/>}</Button>
            {expanded === group.id && <div className="ticket-types">{group.tickets.map(ticket => <article className="ticket-type" key={ticket.id}>
              <div><strong>{ticket.name}</strong><span>{money(ticket.price)}</span><small>{ticket.soldOut ? "Sold out" : "See More  +"}</small></div>
              {ticket.soldOut ? <span className="sold-out">Sold out</span> : <div className="qty"><Button variant="ghost" aria-label={`Remove ${ticket.name}`} onClick={() => setQuantities(q => ({...q,[ticket.id]:Math.max(0,(q[ticket.id]??0)-1)}))}><Minus/></Button><span>{quantities[ticket.id] ?? 0}</span><Button variant="ghost" aria-label={`Add ${ticket.name}`} onClick={() => setQuantities(q => ({...q,[ticket.id]:(q[ticket.id]??0)+1}))}><Plus/></Button></div>}
              {ticket.closes && <em>{ticket.closes}</em>}
            </article>)}</div>}
          </div>)}</div>
        </div>}
        {step === "details" && <form className="ticket-details" onSubmit={(e) => {e.preventDefault(); const form = e.currentTarget; if (!form.checkValidity()) { setErrors(true); form.reportValidity(); return; } setStep("confirmed");}} id="checkout-form">
          <h2>Your details</h2><p>Enter the ticket holder's details below.</p>
          <label>First name<input name="firstName" required /></label><label>Last name<input name="lastName" required /></label><label>Email address<input name="email" type="email" required /></label><label>Mobile number<input name="phone" type="tel" required /></label>
          {errors && <p className="form-error">Please complete all required fields.</p>}
        </form>}
        {step === "confirmed" && <div className="ticket-confirmed"><span>✓</span><h2>Tickets reserved</h2><p>Your local test order has been confirmed. No payment was processed.</p><Button onClick={close}>DONE</Button></div>}
        <footer className="ticket-actions"><Button variant="ghost" onClick={close}>CLOSE</Button>{step === "tickets" ? <Button variant={count ? "primary" : "disabled"} disabled={!count} onClick={() => setStep("details")}>NEXT</Button> : step === "details" ? <Button type="submit" form="checkout-form">CONFIRM</Button> : null}</footer>
      </div>
      <aside className="ticket-order"><img src={eventArt} alt=""/><Button variant="ghost" className="dialog-close" aria-label="Close ticket selection" onClick={close}><X/></Button><div className="order-event"><strong>{event.title}</strong><span>{event.venue.name}</span></div><div className="order-head"><span>Order Summary</span><span>QTY</span><span>Amount</span></div><div className="order-lines">{selected.length ? selected.map(t => <div key={t.id}><span>{t.name}</span><span>{quantities[t.id] ?? 0}</span><span>{money(t.price * (quantities[t.id] ?? 0))}</span></div>) : <p>No Tickets Added Yet</p>}</div><div className="order-total"><span>Ticket Quantity <b>{count}</b></span><span>Total <b>{money(total)}.00</b></span></div></aside>
    </section>
  </div>;
}
