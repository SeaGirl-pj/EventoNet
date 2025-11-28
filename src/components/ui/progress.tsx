"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress@1.1.2";

import { cn } from "./utils";

function Progress({
  className,
  value = 0,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  const clampedValue = Math.min(Math.max(value || 0, 0), 100);
  
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-gray-200 relative h-2 w-full overflow-hidden rounded-full",
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-[#FF7A33] h-full w-full flex-1 transition-all duration-300 ease-in-out rounded-full"
        style={{ transform: `translateX(-${100 - clampedValue}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
