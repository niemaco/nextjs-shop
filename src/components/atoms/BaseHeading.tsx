export type BaseHeadingProps = { text: string };
export const BaseHeading = ({ text }: BaseHeadingProps) => {
	return <h1 className="mb-8 text-3xl font-bold">{text}</h1>;
};
