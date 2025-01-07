"use strict";

  // Get the last modified date of the document
  const lastModified = document.lastModified;

  // Insert it into the "lastUpdated" span
  document.getElementById('lastUpdated').textContent = lastModified;
