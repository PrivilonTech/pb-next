export const registerMessage = (username) => {
  return {
    subject: "Welcome to Polymer Bazaar - Your Polymer Pricing Destination!",
    content: `<!DOCTYPE html>
  <html>
  <head>
    <title>Welcome to Polymer Bazaar</title>
    <style>
          body {
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
          }
    
          .container {
            max-width: 700px;
            margin: 0 auto;
            padding: 10px;
            font-family: Arial, sans-serif;
            color: #333333;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
    
          .heading {
            text-align: center;
            color: #c31815;
            font-size: 36px;
            margin-bottom: 20px;
          }
    
          p{
            font-size: 1.2rem;
          }

          .paragraph {
            margin-bottom: 16px;
            line-height: 1.5;
          }
    
          .username {
            color: #c31815;
            font-weight: bold;
          }
        </style>
  </head>
  <body>
    <div class="container">
      <h1 class="heading">Welcome to Polymer Bazaar!</h1>
      <p class="paragraph">Dear ${username},</p>
      <p class="paragraph">We are delighted to welcome you to Polymer Bazaar, your go-to platform for accessing up-to-date polymer prices and valuable industry insights.</p>
      <p class="paragraph">With Polymer Bazaar, you gain access to an extensive database encompassing various types of polymers, enabling you to make informed decisions in this dynamic industry. Whether you are a manufacturer, trader, or industry professional, our platform is designed to cater to your specific needs, offering accurate and timely pricing data.</p>
      <p class="paragraph">Thank you once again for joining Polymer Bazaar. We look forward to serving your polymer pricing needs and being a valuable partner in your business success.</p>
      <p class="paragraph">Best regards,<br>
        Polymer Bazaar Team.</p>
    </div>
  </body>
  </html>
  `,
  };
};

export const loginMessage = (username) => {
  return {
    subject:
      "Welcome back to Polymer Bazaar - Your Polymer Pricing Destination!",
    content: `<!DOCTYPE html>
      <html>
      <head>
        <title>Welcome back to Polymer Bazaar</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
          }
    
          .container {
            max-width: 700px;
            margin: 0 auto;
            padding: 10px;
            font-family: Arial, sans-serif;
            color: #333333;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
    
          .heading {
            text-align: center;
            color: #c31815;
            font-size: 36px;
            margin-bottom: 20px;
          }
    
          p{
            font-size: 1.2rem;
          }

          .paragraph {
            margin-bottom: 16px;
            line-height: 1.5;
          }
    
          .username {
            color: #c31815;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1 class="heading">Welcome back to Polymer Bazaar!</h1>
          <p class="paragraph">Dear <span class="username">${username}</span>,</p>
          <p class="paragraph">We're thrilled to have you back on Polymer Bazaar, your trusted destination for accessing up-to-date polymer prices and valuable industry insights.</p>
          <p class="paragraph">As an esteemed member, you have exclusive access to our platform's advanced features, personalized recommendations, and the latest industry trends tailored to your interests.</p>
          <p class="paragraph">Should you have any questions or require assistance, our dedicated support team is always here to help you. We appreciate your continued support and look forward to serving your polymer pricing needs.</p>
          <p class="paragraph">Best regards,<br>
            Polymer Bazaar Team</p>
        </div>
      </body>
      </html>`,
  };
};
