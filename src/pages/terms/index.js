import { Box, Typography } from "@mui/material";

const terms = [
  {
    term: "Acceptance of Terms",
    desc: [
      "By using Polymer Bazaar, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions, as well as any other applicable laws and regulations.",
    ],
  },
  {
    term: "Modification of Terms",
    desc: [
      "We reserve the right to modify these terms and conditions at any time without prior notice. Your continued use of the website after any changes signifies your acceptance of the updated terms.",
    ],
  },
  {
    term: "User Obligations",
    desc: [
      "You agree to use the website for lawful purposes only.",
      "You are responsible for maintaining the confidentiality of your account information and password.",
      "You agree not to engage in any activity that interferes with or disrupts the website or the servers and networks connected to the website.",
    ],
  },
  {
    term: "Intellectual Property",
    desc: [
      "All content on this website, including text, graphics, logos, and images, is the property of Polymer Bazaar and is protected by copyright and other intellectual property laws.",
      "You may not reproduce, distribute, or create derivative works from any content on this website without our prior written consent.",
    ],
  },
  {
    term: "Limitation of Liability",
    desc: [
      "Polymer Bazaar is not liable for any direct, indirect, incidental, or consequential damages arising from your use of the website.",
      "We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components.",
    ],
  },
  {
    term: "Third-Party Links",
    desc: [
      "Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these websites. Your use of third-party websites is at your own risk.",
    ],
  },
  {
    term: "Privacy Policy",
    desc: ["Your use of our website is also governed by our Privacy Policy."],
  },
  {
    term: "Governing Law",
    desc: [
      "These terms and conditions are governed by and construed in accordance with the laws of Gujarat. Any disputes arising from or related to these terms shall be subject to the exclusive jurisdiction of the courts of Gujarat.",
    ],
  },
  {
    term: "Termination",
    desc: [
      "We reserve the right to terminate or suspend your access to the website, without prior notice, for conduct that we believe violates these terms and conditions or is harmful to other users of the website, us, or third parties, or for any other reason.",
    ],
  },
  {
    term: "Contact Information",
    desc: [
      "If you have any questions about these terms and conditions, please contact us at +91 93754 24365.",
    ],
  },
];

export default function Terms() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        padding: "3em 2em",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "2em",
            fontWeight: "bold",
            color: "#ef6b67",
          }}
        >
          Terms & Conditions
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "2em" }}>
          <Box>
            <Typography>
              Welcome to Polymer Bazaar. By accessing and using our website, you
              agree to comply with the following terms and conditions
            </Typography>
            <Typography>
              Please read them carefully before using our services.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5em" }}>
            {terms.map(({ term, desc }, index) => (
              <Box
                key={index}
                sx={{ display: "flex", gap: ".5em", flexDirection: "column" }}
              >
                <Box sx={{ display: "flex", gap: ".5em" }}>
                  <Typography>{index + 1}.</Typography>
                  <Typography sx={{ fontWeight: "600" }}>{term}</Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: ".75em",
                  }}
                >
                  {desc.map((desc, index) => (
                    <Typography sx={{ fontSize: ".9em" }} key={index}>
                      - {desc}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>

          <Box>
            <Typography>
              By using Polymer Bazaar, you agree to these terms and conditions.
              If you do not agree, please do not use our website.
            </Typography>
            <Typography>Thank you for visiting Polymer Bazaar.</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
