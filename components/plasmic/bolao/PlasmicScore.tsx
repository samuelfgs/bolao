// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: r6sSLbmSTeVjqGUVythgwH
// Component: IMj4TUj-w8
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
import TextInput from "../../TextInput"; // plasmic-import: m1Xqf2MW_yA/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_bolao.module.css"; // plasmic-import: r6sSLbmSTeVjqGUVythgwH/projectcss
import sty from "./PlasmicScore.module.css"; // plasmic-import: IMj4TUj-w8/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: XT8KYqZLvm1/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: m7errmFAKi2/icon

export type PlasmicScore__VariantMembers = {
  isOpen: "isOpen";
  hide: "hide";
};

export type PlasmicScore__VariantsArgs = {
  isOpen?: SingleBooleanChoiceArg<"isOpen">;
  hide?: SingleBooleanChoiceArg<"hide">;
};

type VariantPropType = keyof PlasmicScore__VariantsArgs;
export const PlasmicScore__VariantProps = new Array<VariantPropType>(
  "isOpen",
  "hide"
);

export type PlasmicScore__ArgsType = {
  homeScore?: string;
  awayScore?: string;
  matchId?: string;
};

type ArgPropType = keyof PlasmicScore__ArgsType;
export const PlasmicScore__ArgProps = new Array<ArgPropType>(
  "homeScore",
  "awayScore",
  "matchId"
);

export type PlasmicScore__OverridesType = {
  root?: p.Flex<"div">;
  homeScoreInput?: p.Flex<typeof TextInput>;
  awayScoreInput?: p.Flex<typeof TextInput>;
};

export interface DefaultScoreProps {
  homeScore?: string;
  awayScore?: string;
  matchId?: string;
  isOpen?: SingleBooleanChoiceArg<"isOpen">;
  hide?: SingleBooleanChoiceArg<"hide">;
  className?: string;
}

function PlasmicScore__RenderFunc(props: {
  variants: PlasmicScore__VariantsArgs;
  args: PlasmicScore__ArgsType;
  overrides: PlasmicScore__OverridesType;

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
        path: "isOpen",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.isOpen
      },

      {
        path: "hide",
        type: "private",
        initFunc: ($props, $state, $ctx) => $props.hide
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, $props, $ctx);

  const [$queries, setDollarQueries] = React.useState({});

  return (
    true ? (
      <div
        data-plasmic-name={"root"}
        data-plasmic-override={overrides.root}
        data-plasmic-root={true}
        data-plasmic-for-node={forNode}
        className={classNames(
          projectcss.all,
          projectcss.root_reset,
          projectcss.plasmic_default_styles,
          projectcss.plasmic_mixins,
          projectcss.plasmic_tokens,
          sty.root,
          { [sty.rootisOpen]: hasVariant($state, "isOpen", "isOpen") }
        )}
      >
        {(hasVariant($state, "hide", "hide") ? true : true) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox___3JrcT, {
              [sty.freeBoxhide___3JrcTleAEk]: hasVariant($state, "hide", "hide")
            })}
          >
            {(hasVariant($state, "hide", "hide") ? true : true) ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__sTl2K, {
                  [sty.freeBoxhide__sTl2KleAEk]: hasVariant(
                    $state,
                    "hide",
                    "hide"
                  ),
                  [sty.freeBoxisOpen__sTl2KCdxsy]: hasVariant(
                    $state,
                    "isOpen",
                    "isOpen"
                  )
                })}
              >
                {(hasVariant($state, "isOpen", "isOpen") ? true : true) ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__r3TqT,
                      {
                        [sty.textisOpen__r3TqTcdxsy]: hasVariant(
                          $state,
                          "isOpen",
                          "isOpen"
                        )
                      }
                    )}
                  >
                    {(() => {
                      try {
                        return $props.homeScore;
                      } catch (e) {
                        if (e instanceof TypeError) {
                          return "0";
                        }
                        throw e;
                      }
                    })()}
                  </div>
                ) : null}
                {(hasVariant($state, "isOpen", "isOpen") ? true : true) ? (
                  <TextInput
                    data-plasmic-name={"homeScoreInput"}
                    data-plasmic-override={overrides.homeScoreInput}
                    className={classNames(
                      "__wab_instance",
                      sty.homeScoreInput,
                      {
                        [sty.homeScoreInputisOpen]: hasVariant(
                          $state,
                          "isOpen",
                          "isOpen"
                        )
                      }
                    )}
                  />
                ) : null}

                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__c9Sw9
                  )}
                >
                  {"X"}
                </div>

                {(hasVariant($state, "isOpen", "isOpen") ? true : true) ? (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mijSf,
                      {
                        [sty.textisOpen__mijSfCdxsy]: hasVariant(
                          $state,
                          "isOpen",
                          "isOpen"
                        )
                      }
                    )}
                  >
                    {(() => {
                      try {
                        return $props.awayScore;
                      } catch (e) {
                        if (e instanceof TypeError) {
                          return "0";
                        }
                        throw e;
                      }
                    })()}
                  </div>
                ) : null}
                {(hasVariant($state, "isOpen", "isOpen") ? true : true) ? (
                  <TextInput
                    data-plasmic-name={"awayScoreInput"}
                    data-plasmic-override={overrides.awayScoreInput}
                    className={classNames(
                      "__wab_instance",
                      sty.awayScoreInput,
                      {
                        [sty.awayScoreInputisOpen]: hasVariant(
                          $state,
                          "isOpen",
                          "isOpen"
                        )
                      }
                    )}
                  />
                ) : null}
              </p.Stack>
            ) : null}
          </div>
        ) : null}
      </div>
    ) : null
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "homeScoreInput", "awayScoreInput"],
  homeScoreInput: ["homeScoreInput"],
  awayScoreInput: ["awayScoreInput"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  homeScoreInput: typeof TextInput;
  awayScoreInput: typeof TextInput;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicScore__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicScore__VariantsArgs;
    args?: PlasmicScore__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicScore__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicScore__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicScore__ArgProps,
          internalVariantPropNames: PlasmicScore__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicScore__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicScore";
  } else {
    func.displayName = `PlasmicScore.${nodeName}`;
  }
  return func;
}

export const PlasmicScore = Object.assign(
  // Top-level PlasmicScore renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    homeScoreInput: makeNodeComponent("homeScoreInput"),
    awayScoreInput: makeNodeComponent("awayScoreInput"),

    // Metadata about props expected for PlasmicScore
    internalVariantProps: PlasmicScore__VariantProps,
    internalArgProps: PlasmicScore__ArgProps
  }
);

export default PlasmicScore;
/* prettier-ignore-end */
