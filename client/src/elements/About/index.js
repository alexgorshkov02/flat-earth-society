import React, { Fragment } from 'react'
import SearchBar from "material-ui-search-bar";

export default function About() {
  return (
    <Fragment>
      About the website here
    <SearchBar
      onChange={() => console.log('onChange')}
      onRequestSearch={() => console.log('onRequestSearch')}
      style={{
        margin: '0 auto',
        maxWidth: 800
      }}
    />
    </Fragment>
  );
}
