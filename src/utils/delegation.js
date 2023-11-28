const content = {
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
