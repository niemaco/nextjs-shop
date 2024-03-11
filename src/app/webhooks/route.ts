import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const POST = async (request: NextRequest): Promise<Response> => {
	const json: unknown = await request.json();
	if (
		typeof json === "object" &&
		json &&
		"productId" in json &&
		typeof json.productId === "string"
	) {
		revalidatePath(`/product/${json.productId}`);
		return NextResponse.json({}, { status: 201 });
	}

	return NextResponse.json(
		{
			message: "Invalid body",
		},
		{ status: 400 },
	);
};
