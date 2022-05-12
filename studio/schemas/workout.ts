export default {
  name: "workout",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Workout name",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "name",
      },
    },
    {
      name: "instructor",
      type: "reference",
      to: [{ type: "instructor" }],
    },
    {
      name: "exercises",
      type: "array",
      title: "Exercises",
      of: [
        {
          type: "reference",
          to: [{ type: "exercise" }],
        },
      ],
    },
  ],
};
