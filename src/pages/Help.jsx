import React from 'react';

import { Stack } from 'office-ui-fabric-react/lib/Stack';

function Help() {
  return (
    <div className="faq-page-container ">
      <h1>Help</h1>
      <Stack>
        <Stack.Item>
          <h2>Error searching?</h2>
          <h5>"Request failed with status code 404"</h5>
          <p>
            You may have experienced an error searching for a city/state. The
            reason you have seen this error is <strong>most likely</strong> due
            to the OpenWeather API not being able to find that specific
            location.
          </p>
          <p>
            <i>How do I fix this?</i>
            <br />
            <i>
              You will probably need to alter your search. There may be a
              misspelling with the city name or perhaps the wrong state was
              selected
            </i>
          </p>
        </Stack.Item>
      </Stack>
      <hr />
      <Stack>
        <Stack.Item>
          <h3>FAQ</h3>
          <h5>"Can I search outside of the United States?"</h5>
          <p>
            The OpenWeather API does provide this capability. Unfortunately this
            is out of scope for this project. Therefore all searching will be
            restricted to the United States.
          </p>
        </Stack.Item>
      </Stack>
    </div>
  );
}

export default Help;
