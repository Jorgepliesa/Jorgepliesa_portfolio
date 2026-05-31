const Button = ({ children, variation, ...props }) => (
	<button
		{...props}
		className={`title mr-3  rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out ${
			variation === "primary"
				? "bg-[var(--color-accent)] hover:bg-transparent border-transparent hover:border-[var(--color-accent)] border-2 text-black hover:text-[var(--color-fg)] box-border shadow-[0_0_10px_rgba(57,255,20,0.25)]"
				: "transparent border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-black box-border shadow-[0_0_6px_rgba(57,255,20,0.12)]"
		}`}>
		{children}
	</button>
);

export default Button;