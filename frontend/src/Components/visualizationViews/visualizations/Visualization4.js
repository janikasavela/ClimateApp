// tooltip: {
//   callbacks: {
//     title: (items) => {
//       const item = items[0]; // Only show tooltip for the first item
//       const yearsAgo = item.raw.x;
//       const event = events.find(e => e.years_ago === yearsAgo);
//       return `Event: ${event.event}`;
//     },
//     label: (item) => {
//       const yearsAgo = item.raw.x;
//       const event = events.find(e => e.years_ago === yearsAgo);
//       return `Event: ${event.event}`;
//     },
//   }, },