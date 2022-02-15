//Modules
import client from "@sendgrid/client";

async function sendEmail(req, res) {
  try {
    const email = req.body.email
    const data = { 
      "list_ids": [process.env.SENDGRID_LIST_ID],
      "contacts": [{ "email": email }] 
    }
    
    const request = {
      url: `/v3/marketing/contacts`,
      method: 'PUT',
      body: data
    }
    
    client.setApiKey(process.env.SENDGRID_API_KEY);

    client.request(request)
    .then(([response, body]) => {
      //console.log(response.statusCode);
      //console.log(response.body);
    })
    .catch(error => {
      console.error(error);
    });

  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message })
  }
  return res.status(200).json({ error: "" })
}

export default sendEmail;
