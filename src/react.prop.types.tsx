export declare interface AppProps {
    // bext, accepts everything React can render
    children?: React.ReactNode;

    // a single React element
    childrenElement: React.JSX.Element;

    // to pass through style props
    style?: React.CSSProperties;

    // form events! the generic param is the type of event.target
    onChange?: React.FormEventHandler<HTMLInputEvent>;

    // to impersonate all props of a btn element & explicitly not forward its ref
    props: Props & React.ComponentPropsWithoutRef<"button">;

    // to impersonate all props of MyButtonForwardedRef and explicitly forwarding its ref
    props2: Props & React.ComponentPropsWithRef<MyButtonWithForwardRef>;
}
