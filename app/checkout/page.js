export const metadata = {
  title: 'devTears | Checkout',
  description: 'Check out page to enter personal details and payment details',
};

export default function CheckoutPage() {
  return (
    <main>
      <h1>Checkout Page</h1>
      <form>
        <br />
        <input placeholder="first name" />
        <input placeholder="last name" />
        <br />
        <input placeholder="address" />
        <br />
        <input placeholder="city" />
        <input placeholder="state" />
        <br />
        <input placeholder="postal code" />
        <br />
        <input placeholder="country" />
      </form>
    </main>
  );
}
