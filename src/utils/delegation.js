const content = {
  2023: {
    "ipf-japan": {
      title: "IPF Japan 2023 - Show Report",
      images: [
        "/delegation/2023/ipf-japan/image_1.jpg",
        "/delegation/2023/ipf-japan/image_2.jpg",
      ],
      videos: [
        "/delegation/2023/ipf-japan/video_1.mp4",
        "/delegation/2023/ipf-japan/video_2.mp4",
      ],
      description: [
        "The IPF Japan 23, a prominent event attracting quality visitors globally, was postponed to 2023 due to the pandemic after its successful conclusion in 2017. Celebrating its 10th edition since 1994, the International Plastic Fair Association hosts this significant show, considered a beacon of Japan's industry, offering abundant business opportunities to explore cutting-edge technologies and innovations.",
        "With 853 exhibitors from various global markets occupying a total of 2572 booths across an approximate area of 22655 square meters, the show beckons industry enthusiasts. The event has garnered attention from the global plastic circuit, evidenced by the participation of diverse countries (a detailed list is attached).",
        "The organizers proudly reported a total footfall of 6768 attendees during the initial two days, with 5889 being Japanese and 879 overseas on the first day and 7095 Japanese and 943 overseas on the second day.",
        "IPF Japan 2023 is a must-attend for those in the plastic industry worldwide. PolymerBazaar, as a media partner, strongly encourages your participation in this event. Gratitude is extended to the organizers, Team IPF, and Mr. Minoru Shibata for their valuable assistance and support.",
        "If you're unable to attend this edition, PolymerBazaar advises considering participation or attendance in the upcoming IPF Japan 2026.",
      ],
      stallDetails: {
        title: "Polymer Bazaar invites you to Visit Us at IPF 2023",
        details: [
          "Stall No: 50908",
          "Dates: 28 Nov.- 2 Dec.’23",
          "Venue: Makuhari Messe,Tokyo.",
          "List Of Raw Material Suppliers & Other Exhibitors https://www.ipfjapan.jp/2023/search_en/",
        ],
      },
    },
  },
  2016: {
    "iran-plast": {
      title: "Iran Plast 2016",
      images: [
        "/delegation/2016/iran-plast/image_1.jpg",
        "/delegation/2016/iran-plast/image_2.jpg",
        "/delegation/2016/iran-plast/image_3.jpg",
        "/delegation/2016/iran-plast/image_4.jpg",
        "/delegation/2016/iran-plast/image_5.jpg",
        "/delegation/2016/iran-plast/image_6.jpg",
        "/delegation/2016/iran-plast/image_7.jpg",
        "/delegation/2016/iran-plast/image_8.jpg",
      ],
    },
  },
};

export const getDelegationContent = (year, country) => {
  if (content.hasOwnProperty(year)) {
    if (content[year].hasOwnProperty(country)) {
      const extractedContent = content[year][country];
      return extractedContent;
    }
  }
  return null;
};
