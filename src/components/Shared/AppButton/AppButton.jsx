import { Button, Spinner } from "@heroui/react";
import React from "react";

export default function AppButton({children, isPending, isDisabled, ...btnConfig}) {
  return (
    <Button
      isPending={isPending}
      isDisabled={isDisabled}
      {...btnConfig}>
      {({ isPending }) => (
        <>
          {isPending ? <Spinner color="current" size="sm" /> : children}
          {isPending && "Progress..."}
        </>
      )}
    </Button>
  );
}
