import React from "react";

function Pricing() {
  return (
    <main>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="check" viewBox="0 0 16 16">
          <title>Check</title>
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </symbol>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol id="checkboxBlank" viewBox="0 0 24 24">
          <title>checkboxBlank</title>
          <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
        </symbol>
      </svg>
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-5 fw-normal">Our offers</h1>
        <p class="fs-5 text-muted">
          Select one of our predefined GEM packages or let the GEM team know
          your specific needs.
          <br />
          The GEM team will make a custom plan that meets all your requirements.
        </p>
      </div>
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">GEM Basic</h4>
            </div>
            <div class="card-body">
              <button type="button" class="w-100 btn btn-lg btn-primary-soft">
                Get started
              </button>
              <div class="accordion" id="accordion1">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="false"
                      aria-controls="collapse1"
                    >
                      0 - 25.000 <br />
                      Functional messages / month
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion1"
                  >
                    <div class="accordion-body">
                      <strong>Functional message</strong>
                      <br />
                      is a single order, invoice or other functionally
                      identifiable message from your supplier, customer, or
                      partner delivered to you. Or a single order, invoice or
                      other functionally identifiable message from you delivered
                      to your supplier, customer, or partner.
                      <br />
                      <strong>Overspend</strong>
                      <br />
                      All messages exceeding the limit will be charged
                      seperately at a rate of €0,06.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      1 Tenant
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion1"
                  >
                    <div class="accordion-body">
                      <strong>Tenant</strong>
                      <br />
                      is an organization (or group of users) that logs into the
                      software platform. The organization that enters into the
                      contract with NLeyes is the first tenant. Each subsequent
                      organization that gains access within your contract is a
                      new tenant.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      10 Users
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion1"
                  >
                    <div class="accordion-body">
                      <strong>User</strong>
                      <br />
                      is a unique identifiable person that logs in to the GEM
                      platform on behalf of an organization.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                      Guaranteed uptime 99,8%
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion1"
                  >
                    <div class="accordion-body">
                      <strong>Platform uptime</strong>
                      <br />
                      It is expressed as the percentage of time the GEM platform
                      has been working and available. 99,8% corresponds with a
                      maximum downtime of circa 4 hours per quarter.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                      5 day back-up retention
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion1"
                  >
                    <div class="accordion-body">
                      <strong>Back-up retention</strong>
                      <br />
                      is the number of days a back-up of your production
                      environment is stored. Every day a back-up of your
                      production environment is created. Each back-up will be
                      purged after 5 calendar days.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse6"
                      aria-expanded="false"
                      aria-controls="collapse6"
                    >
                      Unlimited trading partners
                    </button>
                  </h2>
                  <div
                    id="collapse6"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion1"
                  >
                    <div class="accordion-body">
                      <strong>Trading partner</strong>
                      <br />
                      A customer, supplier, or other partner with whom you
                      exchange messages.
                      <br />
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse7"
                      aria-expanded="false"
                      aria-controls="collapse7"
                    >
                      Unlimited inbound connections
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion1"
                  >
                    <div class="accordion-body">
                      A connection that your customer, supplier, or other
                      partner uses to send messages to the GEM platform
                      <br />
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse8"
                      aria-expanded="false"
                      aria-controls="collapse8"
                    >
                      Unlimited outbound connections
                    </button>
                  </h2>
                  <div
                    id="collapse8"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion1"
                  >
                    <div class="accordion-body">
                      A connection that the GEM platform uses to send messages
                      to your customer, supplier, or other partner
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <h1 class="card-title pricing-card-title">
                €495<small class="text-muted fw-light">/mo</small>
              </h1>
              <button type="button" class="w-100 btn btn-lg btn-primary-soft">
                Get started
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header bg-primary py-3">
              <h4 class="my-0 fw-normal">GEM Advanced</h4>
            </div>
            <div class="card-body">
              <button type="button" class="w-100 btn btn-lg btn-primary">
                Get started
              </button>
              <div class="accordion" id="accordion2">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="false"
                      aria-controls="collapse1"
                    >
                      25.001 - 100.000 <br />
                      Functional messages / month
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <strong>Functional message</strong>
                      <br />
                      is a single order, invoice or other functionally
                      identifiable message from your supplier, customer, or
                      partner delivered to you. Or a single order, invoice or
                      other functionally identifiable message from you delivered
                      to your supplier, customer, or partner.
                      <br />
                      <strong>Overspend</strong>
                      <br />
                      All messages exceeding the limit will be charged
                      seperately at a rate of €0,04.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      2 Tenants
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <strong>Tenant</strong>
                      <br />
                      is an organization (or group of users) that logs into the
                      software platform. The organization that enters into the
                      contract with NLeyes is the first tenant. Each subsequent
                      organization that gains access within your contract is a
                      new tenant.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      50 Users
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <strong>User</strong>
                      <br />
                      is a unique identifiable person that logs in to the GEM
                      platform on behalf of an organization.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                      Guaranteed uptime 99,8%
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <strong>Platform uptime</strong>
                      <br />
                      It is expressed as the percentage of time the GEM platform
                      has been working and available. 99,8% corresponds with a
                      maximum downtime of circa 4 hours per quarter.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                      15 day back-up retention
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <strong>Back-up retention</strong>
                      <br />
                      is the number of days a back-up of your production
                      environment is stored. Every day a back-up of your
                      production environment is created. Each back-up will be
                      purged after 15 calendar days.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse6"
                      aria-expanded="false"
                      aria-controls="collapse6"
                    >
                      Unlimited trading partners
                    </button>
                  </h2>
                  <div
                    id="collapse6"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      <strong>Trading partner</strong>
                      <br />
                      A customer, supplier, or other partner with whom you
                      exchange messages.
                      <br />
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse7"
                      aria-expanded="false"
                      aria-controls="collapse7"
                    >
                      Unlimited inbound connections
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      A connection that your customer, supplier, or other
                      partner uses to send messages to the GEM platform
                      <br />
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse8"
                      aria-expanded="false"
                      aria-controls="collapse8"
                    >
                      Unlimited outbound connections
                    </button>
                  </h2>
                  <div
                    id="collapse8"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion2"
                  >
                    <div class="accordion-body">
                      A connection that the GEM platform uses to send messages
                      to your customer, supplier, or other partner
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <h1 class="card-title pricing-card-title">
                €1495<small class="text-muted fw-light">/mo</small>
              </h1>
              <button type="button" class="w-100 btn btn-lg btn-primary">
                Get started
              </button>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card mb-4 rounded-3 shadow-sm">
            <div class="card-header py-3">
              <h4 class="my-0 fw-normal">GEM Professional</h4>
            </div>
            <div class="card-body">
              <button type="button" class="w-100 btn btn-lg btn-primary-soft">
                Get started
              </button>
              <div class="accordion" id="accordion3">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse1"
                      aria-expanded="false"
                      aria-controls="collapse1"
                    >
                      100.001 - 200.000 <br />
                      Functional messages / month
                    </button>
                  </h2>
                  <div
                    id="collapse1"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion3"
                  >
                    <div class="accordion-body">
                      <strong>Functional message</strong>
                      <br />
                      is a single order, invoice or other functionally
                      identifiable message from your supplier, customer, or
                      partner delivered to you. Or a single order, invoice or
                      other functionally identifiable message from you delivered
                      to your supplier, customer, or partner.
                      <br />
                      <strong>Overspend</strong>
                      <br />
                      All messages exceeding the limit will be charged
                      seperately at a rate of €0,02.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      5 Tenants
                    </button>
                  </h2>
                  <div
                    id="collapse2"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion3"
                  >
                    <div class="accordion-body">
                      <strong>Tenant</strong>
                      <br />
                      is an organization (or group of users) that logs into the
                      software platform. The organization that enters into the
                      contract with NLeyes is the first tenant. Each subsequent
                      organization that gains access within your contract is a
                      new tenant.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      200 Users
                    </button>
                  </h2>
                  <div
                    id="collapse3"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion3"
                  >
                    <div class="accordion-body">
                      <strong>User</strong>
                      <br />
                      is a unique identifiable person that logs in to the GEM
                      platform on behalf of an organization.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse4"
                      aria-expanded="false"
                      aria-controls="collapse4"
                    >
                      Guaranteed uptime 99,9%
                    </button>
                  </h2>
                  <div
                    id="collapse4"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion3"
                  >
                    <div class="accordion-body">
                      <strong>Platform uptime</strong>
                      <br />
                      is expressed as the percentage of time the GEM platform
                      has been working and available. 99,9% corresponds with a
                      maximum downtime of circa 2 hours per quarter.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse5"
                      aria-expanded="false"
                      aria-controls="collapse5"
                    >
                      30 day back-up retention
                    </button>
                  </h2>
                  <div
                    id="collapse5"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion3"
                  >
                    <div class="accordion-body">
                      <strong>Back-up retention</strong>
                      <br />
                      is the number of days a back-up of your production
                      environment is stored. Every day a back-up of your
                      production environment is created. Each back-up will be
                      purged after 30 calendar days.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse6"
                      aria-expanded="false"
                      aria-controls="collapse6"
                    >
                      Unlimited trading partners
                    </button>
                  </h2>
                  <div
                    id="collapse6"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion3"
                  >
                    <div class="accordion-body">
                      <strong>Trading partner</strong>
                      <br />
                      A customer, supplier, or other partner with whom you
                      exchange messages.
                      <br />
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse7"
                      aria-expanded="false"
                      aria-controls="collapse7"
                    >
                      Unlimited inbound connections
                    </button>
                  </h2>
                  <div
                    id="collapse7"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion3"
                  >
                    <div class="accordion-body">
                      A connection that your customer, supplier, or other
                      partner uses to send messages to the GEM platform
                      <br />
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="heading1">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse8"
                      aria-expanded="false"
                      aria-controls="collapse8"
                    >
                      Unlimited outbound connections
                    </button>
                  </h2>
                  <div
                    id="collapse8"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading1"
                    data-bs-parent="#accordion3"
                  >
                    <div class="accordion-body">
                      A connection that the GEM platform uses to send messages
                      to your customer, supplier, or other partner
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <h1 class="card-title pricing-card-title">
                €2995<small class="text-muted fw-light">/mo</small>
              </h1>
              <button type="button" class="w-100 btn btn-lg btn-primary-soft">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 class="display-6 text-center mb-4">Compare plans</h2>
      <div class="table-responsive">
        <table class="table text-center">
          <thead>
            <tr>
              <th style={{ width: "34%" }}>Features</th>
              <th style={{ width: "22%" }}>Basic</th>
              <th style={{ width: "22%" }}>Advanced</th>
              <th style={{ width: "22%" }}>Professional</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" class="text-start">
                Functional messages
              </th>
              <td>25.000</td>
              <td>100.000</td>
              <td>200.000</td>
            </tr>
            <tr>
              <th scope="row" class="text-start">
                Tenants
              </th>
              <td>1</td>
              <td>2</td>
              <td>5</td>
            </tr>
            <tr>
              <th scope="row" class="text-start">
                Users
              </th>
              <td>10</td>
              <td>50</td>
              <td>200</td>
            </tr>
            <tr>
              <th scope="row" class="text-start">
                Guaranteed uptime
              </th>
              <td>99,8%</td>
              <td>99,8%</td>
              <td>99,9%</td>
            </tr>
            <tr>
              <th scope="row" class="text-start">
                Back-up retention
              </th>
              <td>5 days</td>
              <td>15 days</td>
              <td>30 days</td>
            </tr>
            <tr>
              <th scope="row" class="text-start">
                Tradingpartners
              </th>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <th scope="row" class="text-start">
                Inbound connections<sup>1</sup>
              </th>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <th scope="row" class="text-start">
                Outbound connections<sup>1</sup>
              </th>
              <td>Unlimited</td>
              <td>Unlimited</td>
              <td>Unlimited</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <th scope="row" class="text-start">
                Test environment
              </th>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#check" />
                </svg>
              </td>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#check" />
                </svg>
              </td>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#check" />
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-start">
                Production environment
              </th>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#check" />
                </svg>
              </td>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#check" />
                </svg>
              </td>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#check" />
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-start">
                Technical support by e-mail
              </th>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#check" />
                </svg>
              </td>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#check" />
                </svg>
              </td>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#check" />
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-start">
                Technical support by telephone
              </th>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#check" />
                </svg>
              </td>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#check" />
                </svg>
              </td>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#check" />
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-start">
                Peppol accesspoint<sup>2</sup>
              </th>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#checkboxBlank" />
                </svg>
              </td>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#check" />
                </svg>
              </td>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#check" />
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-start">
                Webportal for tradingpartners
              </th>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#checkboxBlank" />
                </svg>
              </td>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#checkboxBlank" />
                </svg>
              </td>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#check" />
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-start">
                Premium support outside business hours
              </th>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#checkboxBlank" />
                </svg>
              </td>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#checkboxBlank" />
                </svg>
              </td>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#check" />
                </svg>
              </td>
            </tr>
            <tr>
              <th scope="row" class="text-start">
                Unlimited tenants
              </th>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#checkboxBlank" />
                </svg>
              </td>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#checkboxBlank" />
                </svg>
              </td>
              <td>
                <svg class="bi" width="24" height="24">
                  <use xlinkHref="#checkboxBlank" />
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="table-footer">
          <ol>
            <li>
              If a trading partner or network charges for the connection, these
              charges will be billed through your monthly invoice.
            </li>
            <li>
              Both sending and receiving documents through Peppol is included
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
}

export default Pricing;
