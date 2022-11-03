export default {
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Represent",
      type: "string",
    },
    {
      name: "pic",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],

  preview: {
    select: {
      title: "name",
      media: "pic",
    },
  },
};
