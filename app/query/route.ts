import { db } from "@vercel/postgres";

// Define the listInvoices function
async function listInvoices() {
  const client = await db.connect(); // Moved into the function
  try {
    const data = await client.sql`
      SELECT invoices.amount, customers.name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.amount = 666;
    `;
    return data.rows; // Return the rows
  } finally {
    client.release(); // Ensure the connection is released
  }
}

// Define the GET handler
export async function GET() {
  try {
    const invoices = await listInvoices(); // Fetch the invoice data
    return new Response(JSON.stringify(invoices), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching invoices:", error); // Log the full error object for debugging

    // Create a consistent error response
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";

    return new Response(
      JSON.stringify({ error: errorMessage, details: error }), // Add additional details if needed
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
