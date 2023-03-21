import { z, defineCollection } from 'astro:content';

const Date = z.object({
    month: z.string(),
    year: z.number(),
});

export const portfolioCollection = defineCollection({
    schema: z.object({
        metaDescription: z.string(),
        title: z.string(),

        name: z.string(),
        position: z.string(),
        summary: z.array(z.string()),

        experience: z.array(
            z.object({
                startDate: Date,
                endDate: Date.optional(),
                position: z.string(),
                company: z.string(),
                location: z.string(),
                technologies: z.array(z.string()),
                details: z.array(z.string()),
            })
        ),

        education: z.object({
            startDate: Date,
            endDate: Date,
            course: z.string(),
            institution: z.string(),
            location: z.string(),
            details: z.array(z.string()),
        }),

        licensesAndCertifications: z.array(
            z.object({
                date: Date,
                name: z.string(),
                issuer: z.string(),
            })
        ),

        projects: z.array(
            z.object({
                name: z.string(),
                date: z.string(),
                githubLink: z.string(),
                link: z.string().optional(),
                summary: z.string(),
                technologies: z.array(z.string()),
            })
        ),
    }),
});

export const collections = {
    portfolio: portfolioCollection,
};
