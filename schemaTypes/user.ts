import { defineField } from "sanity";

const user = {
    name: 'user',
    title: 'user',
    type: 'document',
    fields: [
        defineField({
            name: 'isAdmin',
            title: 'Is Admin',
            type: 'boolean',
            description: 'Check if the user is admin',
            initialValue: false,
            validation: Rule => Rule.required(),
            //readOnly: true,
            //hidden: true,
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'The user name',
            readOnly: true,
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: "Image",
            type: 'url',
        }),
        defineField({
            name: "password",
            type: "string",
            hidden: true, // Because we dont want to view our user password in studio
        }),
        defineField({
            name: "email",
            type: "string",
            title: "Email",

        }),
        defineField({
            name: "emailVerified",
            type: "datetime",
            hidden: true,

        }),
        defineField({
            name: "about",
            title: "About",
            type: "text",
            description: "Short Descripton about the user"
        }),
    ],
}

export default user;