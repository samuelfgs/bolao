// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: r6sSLbmSTeVjqGUVythgwH
// Component: b5zZcZO5NB
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_bolao.module.css"; // plasmic-import: r6sSLbmSTeVjqGUVythgwH/projectcss
import sty from "./PlasmicOutcome.module.css"; // plasmic-import: b5zZcZO5NB/css

export type PlasmicOutcome__VariantMembers = {
  result: "three" | "one" | "zero";
};

export type PlasmicOutcome__VariantsArgs = {
  result?: SingleChoiceArg<"three" | "one" | "zero">;
};

type VariantPropType = keyof PlasmicOutcome__VariantsArgs;
export const PlasmicOutcome__VariantProps = new Array<VariantPropType>(
  "result"
);

export type PlasmicOutcome__ArgsType = {
  homeScore?: string;
  awayScore?: string;
  matchId?: string;
};

type ArgPropType = keyof PlasmicOutcome__ArgsType;
export const PlasmicOutcome__ArgProps = new Array<ArgPropType>(
  "homeScore",
  "awayScore",
  "matchId"
);

export type PlasmicOutcome__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultOutcomeProps {
  homeScore?: string;
  awayScore?: string;
  matchId?: string;
  result?: SingleChoiceArg<"three" | "one" | "zero">;
  className?: string;
}

function PlasmicOutcome__RenderFunc(props: {
  variants: PlasmicOutcome__VariantsArgs;
  args: PlasmicOutcome__ArgsType;
  overrides: PlasmicOutcome__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          homeScore: "0" as const,
          awayScore: "0" as const
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "result",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.result
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  return (
    true ? (
      <p.Stack
        as={"div"}
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        hasGap={true}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root,
          {
            [sty.rootresult_one]: hasVariant($state, "result", "one"),
            [sty.rootresult_three]: hasVariant($state, "result", "three"),
            [sty.rootresult_zero]: hasVariant($state, "result", "zero")
          }
        )}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__okwpc,
            {
              [sty.textresult_one__okwpcJoLeh]: hasVariant(
                $state,
                "result",
                "one"
              ),
              [sty.textresult_three__okwpcXwOpK]: hasVariant(
                $state,
                "result",
                "three"
              ),
              [sty.textresult_zero__okwpcIzZBh]: hasVariant(
                $state,
                "result",
                "zero"
              )
            }
          )}
        >
          {hasVariant($state, "result", "zero")
            ? "0 Pontos"
            : hasVariant($state, "result", "one")
            ? "1 Ponto"
            : hasVariant($state, "result", "three")
            ? "3 Pontos"
            : "X Pontos"}
        </div>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__sAu8Z
          )}
        >
          {`- Resultado Correto: ${$props.homeScore} x ${$props.awayScore}`}
        </div>
      </p.Stack>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOutcome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOutcome__VariantsArgs;
    args?: PlasmicOutcome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOutcome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicOutcome__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicOutcome__ArgProps,
          internalVariantPropNames: PlasmicOutcome__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicOutcome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOutcome";
  } else {
    func.displayName = `PlasmicOutcome.${nodeName}`;
  }
  return func;
}

export const PlasmicOutcome = Object.assign(
  // Top-level PlasmicOutcome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicOutcome
    internalVariantProps: PlasmicOutcome__VariantProps,
    internalArgProps: PlasmicOutcome__ArgProps
  }
);

export default PlasmicOutcome;
/* prettier-ignore-end */
