import React from "react";

function Featuretable() {
  return (
    <div>
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
    </div>
  );
}

export default Featuretable;
