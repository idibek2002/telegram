import { ActionIcon } from "@mantine/core";

const Button = (props: any) => {
  return (
    <ActionIcon size="50px" {...props} radius="50%" bg={"#333333"}>
      {props.children}
    </ActionIcon>
  );
};

export default Button;
