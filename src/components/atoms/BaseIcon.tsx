import dynamic from "next/dynamic";
import { type LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

export interface IconProps extends LucideProps {
	name: keyof typeof dynamicIconImports;
}

export const BaseIcon = ({ name, ...props }: IconProps) => {
	const LucideIcon = dynamic(dynamicIconImports[name]);

	return <LucideIcon {...props} />;
};
