export default {
  name: "instructor",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Instructor name",
    },
    {
      name: "photo",
      type: "image",
      title: "Photo",
      options: {
        hotspot: true,
      },
    },
  ],
};
