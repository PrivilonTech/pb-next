import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import { Box } from "@mui/material";

import { getTextData } from "@/utils/apiCalls";
import EmptyData from "@/Components/PaneContent/EmptyData";
import BlogContent from "@/Components/PaneContent/BlogContent";
import AdminTextUpload from "@/Components/Admin/AdminTextUpload";
import { CovidImpactDelegation } from "@/Components/Delegations";

export default function index() {
  const router = useRouter();

  const { year, country } = router.query;

  const [data, setData] = useState([]);
  const [dataChange, setDataChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getTextData(
      `delegation-${country}-${year}`,
      1,
      2024,
      setData,
      setIsLoading
    );
  }, [dataChange]);

  useEffect(() => {
    if (!year || !country) return;

    getTextData(
      `delegation-${country}-${year}`,
      1,
      2024,
      setData,
      setIsLoading
    );
  }, [year, country]);

  if (!year || !country) {
    return (
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
          width: "100%",
          height: "50vh",
        }}
      >
        <ClipLoader color="#C31815" size={30} />
      </Box>
    );
  }

  if (year === "2020" || year === "2021") return <CovidImpactDelegation />;

  // const delegationContent = getDelegationContent(year, country);

  // if (!delegationContent) {
  //   return (
  //     <Box
  //       sx={{
  //         display: "flex",
  //         flexDirection: "column",
  //         gap: "2em",
  //         padding: "3em 2em",
  //       }}
  //     >
  //       <EmptyData />
  //     </Box>
  //   );
  // }

  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     gap: "2em",
    //     padding: "3em 2em",
    //   }}
    // >
    //   <Box
    //     sx={{
    //       display: "flex",
    //       flexDirection: "column",
    //       alignItems: "center",
    //       gap: "1em",
    //     }}
    //   >
    //     <Typography
    //       sx={{
    //         textAlign: "center",
    //         fontSize: "2em",
    //         fontWeight: "bold",
    //         color: "#ef6b67",
    //       }}
    //     >
    //       {delegationContent.title}
    //     </Typography>

    //     <Box
    //       sx={{
    //         display: "flex",
    //         flexDirection: { xs: "column", md: "row" },
    //         gap: "2em",
    //         width: "100%",
    //       }}
    //     >
    //       <Box sx={{ width: { xs: "100%", md: "70%" } }}>
    //         <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
    //           {delegationContent.description ? (
    //             delegationContent.description.map((desc, index) => (
    //               <Typography key={index}>{desc}</Typography>
    //             ))
    //           ) : (
    //             <EmptyData />
    //           )}
    //         </Box>

    //         <Box sx={{ display: "flex", flexDirection: "column", gap: "1em" }}>
    //           {delegationContent.stallDetails &&
    //             delegationContent.stallDetails.map((stallDetails, index) => (
    //               <Box key={index} sx={{ pt: "3em" }}>
    //                 <Typography
    //                   sx={{
    //                     color: "#1e1e1e",
    //                     fontWeight: 700,
    //                     fontSize: "1.5rem",
    //                   }}
    //                 >
    //                   {stallDetails.title}
    //                 </Typography>
    //                 <Box
    //                   sx={{
    //                     display: "flex",
    //                     flexDirection: "column",
    //                     gap: "0.5em",
    //                     pt: "10px",
    //                   }}
    //                 >
    //                   {stallDetails.details.map((detail, index) => (
    //                     <Typography key={index}>{detail}</Typography>
    //                   ))}
    //                 </Box>
    //               </Box>
    //             ))}
    //         </Box>

    //         <Box
    //           sx={{
    //             pt: "3em",
    //             display: "flex",
    //             justifyContent: "space-around",
    //             flexWrap: "wrap",
    //           }}
    //         >
    //           {delegationContent.videos &&
    //             delegationContent.videos.map((video, index) => (
    //               <video
    //                 key={index}
    //                 controls
    //                 style={{ height: "300px", width: "300px" }}
    //               >
    //                 <source src={video} type="video/mp4" />
    //               </video>
    //             ))}
    //         </Box>
    //       </Box>

    //       <Box
    //         sx={{
    //           display: "flex",
    //           alignItems: "center",
    //           justifyContent: "start",
    //           width: { xs: "100%", md: "30%" },
    //           flexDirection: "column",
    //           gap: "2em",
    //         }}
    //       >
    //         {delegationContent.images.map((image, index) => (
    //           <Image
    //             key={index}
    //             src={image}
    //             style={{ borderRadius: "10px", objectFit: "contain" }}
    //             width={300}
    //             height={300}
    //             alt="delegation image"
    //           />
    //         ))}
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
    <Box
      sx={{
        margin: { xs: "2em 4em", md: "2em 4em" },
        display: "flex",
        flexDirection: "column",
        gap: "2em",
      }}
    >
      <AdminTextUpload
        path={`delegation-${country}-${year}`}
        setDataChange={setDataChange}
        isEvent
      />
      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", my: "5em" }}>
          <ClipLoader color="#C31815" size={30} />
        </Box>
      ) : data.length === 0 ? (
        <EmptyData />
      ) : (
        <BlogContent data={data} setDataChange={setDataChange} />
      )}
    </Box>
  );
}
