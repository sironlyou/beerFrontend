import { Skeleton } from "@chakra-ui/react";
import React from "react";
import { SkeletonLoaderProps } from "./types";

export const SkeletonLoader = ({
  count,
  height,
  width,
}: SkeletonLoaderProps) => {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        <Skeleton
          key={i}
          startColor='blackAlpha.400'
          endColor='whiteAlpha.300'
          height={height}
          width={width}
          borderRadius={4}
        />
      ))}
    </>
  );
};
