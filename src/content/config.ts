import { z, defineCollection } from 'astro:content';

const portfolioCollection = defineCollection({
    schema: z.object({
        metaDescription: z.string(),
        title: z.string(),

        name: z.string(),
        position: z.string(),
        mainDescription: z.array(z.string()),

        experience: z.array(
            z.object({
                startDate: z.string(),
                endDate: z.string().optional(),
                position: z.string(),
                company: z.string(),
                location: z.string(),
                technologies: z.array(z.string()),
                details: z.array(z.string()),
            })
        ),

        education: z.object({
            startDate: z.string(),
            endDate: z.string(),
            course: z.string(),
            institution: z.string(),
            location: z.string(),
            details: z.array(z.string()),
        }),

        licensesAndCertifications: z.array(
            z.object({
                date: z.string(),
                name: z.string(),
                issuer: z.string(),
            })
        ),
    }),
});

export const collections = {
    portfolio: portfolioCollection,
};
