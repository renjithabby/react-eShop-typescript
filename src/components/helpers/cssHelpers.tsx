export const pageGridStyle = `
display: grid;
grid-template-columns: repeat(1, 1fr);
grid-auto-rows: minmax(100px, auto);
grid-gap: 10px;
@media (min-width: 600px) {
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
@media (min-width: 768px) {
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}`;
