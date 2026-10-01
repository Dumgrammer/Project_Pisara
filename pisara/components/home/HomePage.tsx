import Link from 'next/link';
import './home.css';

export default function HomePage() {
  return (
    <div className="pisara-home">
      <header className="topbar">
        <div className="topbar-inner">
          <Link className="brand" href="/" aria-label="Pisara home">
            <span className="dot" aria-hidden="true" />
            <span className="name">Pisara</span>
            <span className="tag">Service Desk</span>
          </Link>
          <nav className="nav" aria-label="Primary">
            <Link href="/dashboard">Queue</Link>
            <Link href="/tickets">Tickets</Link>
            <Link href="/teams">Teams</Link>
          </nav>
          <div className="top-actions">
            <Link className="btn btn-outline top-cta" href="/activity">
              System status
            </Link>
            <Link className="btn btn-primary" href="/dashboard">
              Enter queue
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section className="hero wrap">
          <p className="eyebrow">Internal · IT service desk</p>
          <h1>
            Every IT request enters <span className="hl">one</span> queue.
          </h1>
          <p className="lead">
            Raise a ticket, see who picked it up, and follow it to resolution — no more chasing email
            threads or wondering whether anyone saw it.
          </p>
          <div className="hero-actions">
            <Link className="btn btn-outline btn-lg" href="/tickets/new">
              Raise a request
            </Link>
            <Link className="link" href="/dashboard">
              How routing works <span className="arw" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="wrap" aria-label="Live ticket queue" style={{ paddingTop: 0 }}>
          <div className="queue">
            <div className="q-top">
              <div className="q-title">
                <span className="k">Live queue</span>
                <span className="t">All teams</span>
              </div>
              <nav className="q-tabs" aria-label="Queue filters">
                <span className="q-tab is-on">Open</span>
                <span className="q-tab">Unassigned</span>
                <span className="q-tab">Mine</span>
              </nav>
              <div className="q-hint">
                <kbd>/</kbd>
                <span>to search</span>
              </div>
            </div>

            <div className="incident">
              <span className="sq" aria-hidden="true" />
              <span className="code">P0</span>
              <span className="msg">VPN gateway degraded — engineers assigned</span>
              <span className="time">09:41</span>
            </div>

            <div className="q-head" aria-hidden="true">
              <span>ID</span>
              <span>Subject</span>
              <span>Team</span>
              <span>Status</span>
              <span className="r">Age</span>
            </div>

            <div className="trow">
              <span className="tid">PS-4127</span>
              <span className="tsubject">VPN disconnects after ~10 minutes</span>
              <span className="tteam">Network</span>
              <span className="tstatus">
                <span className="tag progress">In progress</span>
              </span>
              <span className="tupd">12m</span>
            </div>

            <div className="trow">
              <span className="tid">PS-4125</span>
              <span className="tsubject">Laptop won&apos;t boot past BIOS splash</span>
              <span className="tteam">Hardware</span>
              <span className="tstatus">
                <span className="tag waiting">Waiting on vendor</span>
              </span>
              <span className="tupd">1h</span>
            </div>

            <div className="trow">
              <span className="tid">PS-4123</span>
              <span className="tsubject">Printer on floor 3 reports a paper jam</span>
              <span className="tteam">Print</span>
              <span className="tstatus">
                <span className="tag">Open</span>
              </span>
              <span className="tupd">2h</span>
            </div>

            <div className="trow">
              <span className="tid">PS-4121</span>
              <span className="tsubject">Okta MFA prompts looping for new hires</span>
              <span className="tteam">Identity</span>
              <span className="tstatus">
                <span className="tag progress">In progress</span>
              </span>
              <span className="tupd">3h</span>
            </div>

            <div className="trow">
              <span className="tid">PS-4118</span>
              <span className="tsubject">Adobe license request for design pod</span>
              <span className="tteam">Accounts</span>
              <span className="tstatus">
                <span className="tag waiting">Awaiting requester</span>
              </span>
              <span className="tupd">5h</span>
            </div>

            <div className="q-foot">
              <span className="count">Showing 5 of 34 open</span>
              <Link className="link" href="/tickets">
                View full queue <span className="arw" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="wrap" aria-label="Queue summary">
          <div className="stats">
            <div className="stat">
              <span className="label">Open requests</span>
              <span className="num">34</span>
            </div>
            <div className="stat">
              <span className="label">Assigned to you</span>
              <span className="num">6</span>
            </div>
            <div className="stat">
              <span className="label">Waiting on vendor</span>
              <span className="num">3</span>
            </div>
          </div>
          <p className="closing">Raise it once — routing, assignment, and history all stay in the queue.</p>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <span className="brand">
            <span className="name">Pisara</span>
          </span>
          <span className="note">Internal · staff only</span>
        </div>
      </footer>
    </div>
  );
}
