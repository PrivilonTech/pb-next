import { Typography } from "@mui/material";
import Link from "next/link";

export default function BuySellTable() {
  const buySellData = [
    {
      serialNo: 1,
      product: "PP",
      rmName: "Mrs. Neela Shah",
      phone: "+91 93139 24 365",
      email: "PP@Polymerbazaar.com",
      whatsapp: "https://chat.whatsapp.com/Lagxx3AaZ551prRW0eX64z",
    },
    {
      serialNo: 2,
      product: "PVC",
      rmName: "S.S.Shaikh",
      phone: "+91 95108 24 365",
      email: "PVC@Polymerbazaar.com",
      whatsapp: "https://chat.whatsapp.com/JqbOQ6o4jTb46G34WG3rEu",
    },
    {
      serialNo: 3,
      product: "HDPE",
      rmName: "M.S.Shaikh",
      phone: "+91 93138 24 365",
      email: "HDPE@Polymerbazaar.com",
      whatsapp: "https://chat.whatsapp.com/DiD2sDbzsqz90OK0v9zcDN",
    },
    {
      serialNo: 4,
      product: "LLDPE",
      rmName: "M.S.Shaikh",
      phone: "+91 93138 24 365",
      email: "LLDPE@Polymerbazaar.com",
      whatsapp: "https://chat.whatsapp.com/IY4m3AB81114YHx6lHPjNW",
    },
    {
      serialNo: 5,
      product: "LDPE",
      rmName: "M.S.Shaikh",
      phone: "+91 93138 24 365",
      email: "LDPE@Polymerbazaar.com",
      whatsapp: "https://chat.whatsapp.com/CteGeeE5PjyKs0uxsrGIyY",
    },
    {
      serialNo: 6,
      product: "PET",
      rmName: "Mr.Karan Desai",
      phone: "+91 79840 24 365",
      email: "PET@Polymerbazaar.com",
      whatsapp: "https://chat.whatsapp.com/KpSPIbebm1u5GoKdg82780",
    },
    {
      serialNo: 7,
      product: "PS",
      rmName: "Diksharth Vora",
      phone: "+91 63523 24 365",
      email: "PS@Polymerbazaar.com",
      whatsapp: "https://chat.whatsapp.com/B9ifbkHyoqB87u5185QTXl",
    },
    {
      serialNo: 8,
      product: "ABS",
      rmName: "Diksharth Vora",
      phone: "+91 63523 24 365",
      email: "ABS@Polymerbazaar.com",
      whatsapp: "https://chat.whatsapp.com/EYGmkTec8eg6fKZLWRCAsm",
    },
    {
      serialNo: 9,
      product: "ENGG",
      rmName: "Mrs.Pore",
      phone: "+91 95104 24 365",
      email: "ENGG@Polymerbazaar.com",
      whatsapp: "https://chat.whatsapp.com/Hl7PZAkavwV25k9XZMDc1O",
    },
    {
      serialNo: 10,
      product: "EVA",
      rmName: "Mrs.Pore",
      phone: "+91 95104 24 365",
      email: "EVA@Polymerbazaar.com",
      whatsapp: "https://chat.whatsapp.com/LHCasT950e2Ck3lQ3MPuYR",
    },
  ];

  return (
    <table>
      <>
        <thead>
          <tr>
            <th style={{ display: "flex", justifyContent: "space-evenly" }}>
              <Typography>S.R.NO</Typography>
            </th>
            <th>
              <Typography>PRODUCTS</Typography>
            </th>
            <th>
              <Typography>MOBILE NUMBER</Typography>
            </th>
            <th>
              <Typography>EMAIL ID</Typography>
            </th>
            <th>
              <Typography>WHATSAPP</Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {buySellData.map((item, index) => (
            <tr key={index}>
              <td style={{ fontSize: ".85rem", textAlign: "center" }}>
                {item.serialNo}
              </td>
              <td style={{ fontSize: ".85rem" }}>{item.product}</td>
              <td style={{ fontSize: ".85rem" }}>{item.phone}</td>
              <td style={{ fontSize: ".85rem" }}>{item.email}</td>
              <td style={{ fontSize: ".85rem" }}>
                <Link href={item.whatsapp}>
                  Join Whatsapp Community for {item.product} Buy & Sell
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </>
    </table>
  );
}
