export default function orderByProps(obj, orderSort) {
  const arrWithOrderedProps = [];
  const arrWithUnorderedProps = [];

  for (const prop in obj) {
    if (orderSort.includes(prop)) {
      arrWithOrderedProps.push({ key: prop, value: obj[prop] });
    } else {
      arrWithUnorderedProps.push({ key: prop, value: obj[prop] });
    }
  }

  arrWithOrderedProps.sort((a, b) => orderSort.indexOf(a.key) - orderSort.indexOf(b.key));
  arrWithUnorderedProps.sort((a, b) => a.key.localeCompare(b.key));

  return [...arrWithOrderedProps, ...arrWithUnorderedProps];
}
