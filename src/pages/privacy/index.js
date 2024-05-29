import { Box, Typography } from "@mui/material";
import Link from "next/link";

const policies = [
  {
    policy: "Information We Collect",
    desc: [
      "Personal Information: When you register on our website, subscribe to our newsletter, or fill out a form, we may collect personal information such as your name, email address, phone number, and company details.",
      "Non-Personal Information: We may also collect non-personal information such as your browser type, operating system, IP address, and browsing behavior on our website through cookies and similar technologies.",
    ],
  },
  {
    policy: "How We Use Your Information",
    desc: [
      "To personalize your experience on our website and deliver content tailored to your interests.",
      "To improve our website based on your feedback and usage patterns.",
      "To respond to your inquiries, provide customer support, and manage your account.",
      "To send periodic emails regarding updates, promotions, and other information related to our services. You can opt-out of receiving these emails at any time.",
      "To comply with legal obligations and protect our rights and the rights of others.",
    ],
  },
  {
    policy: "How We Protect Your Information",
    desc: [
      "We implement a variety of security measures to maintain the safety of your personal information. This includes using secure servers, encrypting sensitive data, and regularly updating our security practices to protect against unauthorized access, alteration, disclosure, or destruction of your personal information.",
    ],
  },
  {
    policy: "Sharing Your Information",
    desc: [
      "We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:",
      "With trusted third parties who assist us in operating our website, conducting our business, or providing services to you, provided that these parties agree to keep your information confidential.",
      "When we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.",
      "In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred to the new owner.",
    ],
  },
  {
    policy: "Cookies and Tracking Technologies",
    desc: [
      "Our website uses cookies and similar technologies to enhance your experience. Cookies are small files that a site or its service provider transfers to your computer's hard drive through your web browser (if you allow) that enable the site's or service provider's systems to recognize your browser and capture and remember certain information.",
      "You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies via your browser settings. If you disable cookies, some features of our website may not function properly.",
    ],
  },
  {
    policy: "Third-Party Links",
    desc: [
      "Our website may contain links to third-party sites. These sites have separate and independent privacy policies. We have no responsibility or liability for the content and activities of these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.",
    ],
  },
  {
    policy: "Your Rights",
    desc: [
      "You have the right to access, update, and delete your personal information. You can do this by logging into your account or contacting us directly. Additionally, you have the right to object to the processing of your data and to withdraw your consent at any time.",
    ],
  },
  {
    policy: "Changes to Our Privacy Policy",
    desc: [
      "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
    ],
  },
  {
    policy: "Contact Us",
    desc: [
      "If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:",
    ],
  },
];

export default function Privacy() {
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
          Privacy Policy
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: "2em" }}>
          <Box>
            <Typography>
              At Polymer Bazaar, we are committed to protecting your privacy and
              ensuring the security of your personal information.
            </Typography>
            <Typography>
              This Privacy Policy outlines how we collect, use, and safeguard
              your information when you visit our website.
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5em" }}>
            {policies.map(({ policy, desc }, index) => (
              <Box
                key={index}
                sx={{ display: "flex", gap: ".5em", flexDirection: "column" }}
              >
                <Box sx={{ display: "flex", gap: ".5em" }}>
                  <Typography>{index + 1}.</Typography>
                  <Typography sx={{ fontWeight: "600" }}>{policy}</Typography>
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
            <Typography>POLYMER BAZAAR</Typography>
            <Typography>
              Samyak House, Opp. Sevakunj Parisar, Paldi, Ahmedabad - 380007
            </Typography>
            <Link
              target="_blank"
              href="mailto:info@polymerbazaar.com"
              sx={{ color: "#ef6b67" }}
            >
              <Typography>info@polymerbazaar.com</Typography>
            </Link>
            <Link href="tel:+919375424365" sx={{ color: "#ef6b67" }}>
              <Typography>+91 93754 24365</Typography>
            </Link>
          </Box>

          <Box>
            <Typography>
              By using our website, you consent to our Privacy Policy.
            </Typography>
            <Typography>Thank you for visiting Polymer Bazaar.</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
