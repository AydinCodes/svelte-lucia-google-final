import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.session;

	if (!session) {
		throw redirect(302, '/login');
	}

	const user = await locals.user;

	if (!user) {
		throw redirect(302, '/login');
	}

	const userDetails = await prisma.user.findFirst({
		where: { id: user.id }
	});

	return { user: userDetails };
};
