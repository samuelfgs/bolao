// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: r6sSLbmSTeVjqGUVythgwH
// Component: OOOAytBF10
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
import Header from "../../Header"; // plasmic-import: qQe6YhWQiQ/component
import TextInput from "../../TextInput"; // plasmic-import: m1Xqf2MW_yA/component
import Button from "../../Button"; // plasmic-import: M9Ku_AMa4YF/component

import { useScreenVariants as useScreenVariantsmE8VsUsoIpq2E } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: mE8VSUsoIpq2e/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_bolao.module.css"; // plasmic-import: r6sSLbmSTeVjqGUVythgwH/projectcss
import sty from "./PlasmicSignup.module.css"; // plasmic-import: OOOAytBF10/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: XT8KYqZLvm1/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: m7errmFAKi2/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: 5goO553KlvC/icon

export type PlasmicSignup__VariantMembers = {};

export type PlasmicSignup__VariantsArgs = {};
type VariantPropType = keyof PlasmicSignup__VariantsArgs;
export const PlasmicSignup__VariantProps = new Array<VariantPropType>();

export type PlasmicSignup__ArgsType = {
  error?: React.ReactNode;
};

type ArgPropType = keyof PlasmicSignup__ArgsType;
export const PlasmicSignup__ArgProps = new Array<ArgPropType>("error");

export type PlasmicSignup__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  img?: p.Flex<typeof p.PlasmicImg>;
  name?: p.Flex<typeof TextInput>;
  username?: p.Flex<typeof TextInput>;
  password?: p.Flex<typeof TextInput>;
  signup?: p.Flex<typeof Button>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultSignupProps {}

function PlasmicSignup__RenderFunc(props: {
  variants: PlasmicSignup__VariantsArgs;
  args: PlasmicSignup__ArgsType;
  overrides: PlasmicSignup__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsmE8VsUsoIpq2E()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            sty.root
          )}
        >
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox___7M3MT)}>
              <Header
                data-plasmic-name={"header"}
                data-plasmic-override={overrides.header}
                className={classNames("__wab_instance", sty.header)}
              />
            </div>
          ) : null}
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__aCgap)}>
              <p.PlasmicImg
                data-plasmic-name={"img"}
                data-plasmic-override={overrides.img}
                alt={""}
                className={classNames(sty.img)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={
                  hasVariant(globalVariants, "screen", "desktop")
                    ? ("100%" as const)
                    : ("auto" as const)
                }
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/bolao/images/whatsAppImage20221117At50432Pm2Jpeg.jpeg",
                  fullWidth: 400,
                  fullHeight: 900,
                  aspectRatio: undefined
                }}
              />

              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__iu1TT)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__mt5Xz)}
                  >
                    {p.renderPlasmicSlot({
                      defaultContents: "Enter some text",
                      value: args.error,
                      className: classNames(sty.slotTargetError)
                    })}
                  </div>

                  {true ? (
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__nNqwb)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__ar25
                        )}
                      >
                        {"Nome"}
                      </div>

                      <TextInput
                        data-plasmic-name={"name"}
                        data-plasmic-override={overrides.name}
                        className={classNames("__wab_instance", sty.name)}
                        required={true}
                      />
                    </p.Stack>
                  ) : null}

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___8JsEz)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__pv7V5
                      )}
                    >
                      {"Usuario"}
                    </div>

                    <TextInput
                      data-plasmic-name={"username"}
                      data-plasmic-override={overrides.username}
                      className={classNames("__wab_instance", sty.username)}
                      required={true}
                    />
                  </p.Stack>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__nnZy7)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__y2Tm0
                      )}
                    >
                      {"Senha"}
                    </div>

                    <TextInput
                      data-plasmic-name={"password"}
                      data-plasmic-override={overrides.password}
                      className={classNames("__wab_instance", sty.password)}
                      required={true}
                      type={"password" as const}
                    />
                  </p.Stack>

                  <Button
                    data-plasmic-name={"signup"}
                    data-plasmic-override={overrides.signup}
                    className={classNames("__wab_instance", sty.signup)}
                  >
                    {"Cadastrar"}
                  </Button>

                  <p.PlasmicLink
                    data-plasmic-name={"link"}
                    data-plasmic-override={overrides.link}
                    className={classNames(
                      projectcss.all,
                      projectcss.a,
                      projectcss.__wab_text,
                      sty.link
                    )}
                    component={Link}
                    href={`/login`}
                    platform={"nextjs"}
                  >
                    {"J?? tem conta? Clique aqui"}
                  </p.PlasmicLink>
                </p.Stack>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "img",
    "name",
    "username",
    "password",
    "signup",
    "link"
  ],
  header: ["header"],
  img: ["img"],
  name: ["name"],
  username: ["username"],
  password: ["password"],
  signup: ["signup"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  img: typeof p.PlasmicImg;
  name: typeof TextInput;
  username: typeof TextInput;
  password: typeof TextInput;
  signup: typeof Button;
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicSignup__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicSignup__VariantsArgs;
    args?: PlasmicSignup__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicSignup__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicSignup__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicSignup__ArgProps,
          internalVariantPropNames: PlasmicSignup__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicSignup__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicSignup";
  } else {
    func.displayName = `PlasmicSignup.${nodeName}`;
  }
  return func;
}

export const PlasmicSignup = Object.assign(
  // Top-level PlasmicSignup renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    img: makeNodeComponent("img"),
    _name: makeNodeComponent("name"),
    username: makeNodeComponent("username"),
    password: makeNodeComponent("password"),
    signup: makeNodeComponent("signup"),
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicSignup
    internalVariantProps: PlasmicSignup__VariantProps,
    internalArgProps: PlasmicSignup__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicSignup;
/* prettier-ignore-end */
