export const defaultState = {};

export function parseHash() {
  const hash = location.hash.substring(1);
  return parseQueryString(hash);
}

export function setHash(obj) {
  const hash = stringifyQuery(obj);

  if (history.pushState) {
    history.pushState(null, null, `#${hash}`);
  } else {
    location.hash = `#${hash}`;
  }
}

export function parseQueryString(queryString) {
  const parts = queryString.split('&');
  const obj = {};
  parts.forEach((part) => {
    const vals = part.split('=');
    const key = vals[0];
    let value = decodeURIComponent(vals[1]);

    switch (key) {
      case 'mt':
        value = normalizeMapType(value);
        break;

      case 'filter':
        value = normalizeFilter(value);
        break;

      case 'geo':
        value = normalizeGeo(value);
        break;

      default:
        break;
    }

    if (key) obj[key] = value;
  });

  return obj;
}


export function stringifyQuery(query) {
  const parts = [];
  for (let key in query) {
    parts.push(`${key}=${encodeURIComponent(query[key])}`);
  }

  return parts.join('&');
}


export function makeAppState(items) {
  const rsp = {};

  if (items.currentView) {
    const view = (items.currentView === 'dorling') ? 'bubbles' : 'map';
    rsp.mt = view;
  }

  if (items.currentFilter) {
    rsp.filter = items.currentFilter;
  }

  if (items.selectedGeo) {
    rsp.geo = items.selectedGeo;
  }

  return rsp;
}

export function makeDefaultState(items) {
  const rsp = {...defaultState};

  if (items) {
    if (items.mt) rsp.bestSchoolDay.currentView = items.mt;
    if (items.filter) rsp.bestSchoolDay.currentFilter = items.filter;
    if (items.geo) rsp.bestSchoolDay.selectedGeo = items.geo;
  }

  return rsp;
}
