import { defineField, defineType } from "sanity";

export default defineType({
  name: "featuredLink",
  title: "Featured Link",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "ctaLabel",
      title: "Button label",
      type: "string",
      initialValue: "Visit Site",
    }),
    defineField({
      name: "order",
      title: "Order",
      description: "Lower numbers appear first. Used for the (01), (02) labels too.",
      type: "number",
      validation: (rule) => rule.required().integer().min(1),
    }),
  ],
  orderings: [
    {
      title: "Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", order: "order" },
    prepare({ title, order }) {
      return {
        title,
        subtitle: typeof order === "number" ? `(${String(order).padStart(2, "0")})` : undefined,
      };
    },
  },
});
