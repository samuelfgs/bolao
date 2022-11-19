// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: r6sSLbmSTeVjqGUVythgwH
// Component: Kqr_HwzDFT
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
import { Fetcher } from "../../../pages/plasmic-host"; // plasmic-import: 7dFnQyHCpn/codeComponent
import GrupoRodadas from "../../GrupoRodadas"; // plasmic-import: 5XZgnc_Vja6/component
import Button from "../../Button"; // plasmic-import: M9Ku_AMa4YF/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_bolao.module.css"; // plasmic-import: r6sSLbmSTeVjqGUVythgwH/projectcss
import sty from "./PlasmicPartidas.module.css"; // plasmic-import: Kqr_HwzDFT/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: m7errmFAKi2/icon
import SaveIconsvgIcon from "./icons/PlasmicIcon__SaveIconsvg"; // plasmic-import: -d2BCB21Y/icon

export type PlasmicPartidas__VariantMembers = {};

export type PlasmicPartidas__VariantsArgs = {};
type VariantPropType = keyof PlasmicPartidas__VariantsArgs;
export const PlasmicPartidas__VariantProps = new Array<VariantPropType>();

export type PlasmicPartidas__ArgsType = {
  needsSave?: boolean;
};

type ArgPropType = keyof PlasmicPartidas__ArgsType;
export const PlasmicPartidas__ArgProps = new Array<ArgPropType>("needsSave");

export type PlasmicPartidas__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  fetcher?: p.Flex<typeof Fetcher>;
  grupoRodadas?: p.Flex<typeof GrupoRodadas>;
  save?: p.Flex<typeof Button>;
  svg?: p.Flex<"svg">;
};

export interface DefaultPartidasProps {}

function PlasmicPartidas__RenderFunc(props: {
  variants: PlasmicPartidas__VariantsArgs;
  args: PlasmicPartidas__ArgsType;
  overrides: PlasmicPartidas__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          needsSave: true
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
            <div className={classNames(projectcss.all, sty.freeBox__wtp0Y)}>
              <Header
                data-plasmic-name={"header"}
                data-plasmic-override={overrides.header}
                className={classNames("__wab_instance", sty.header)}
              />
            </div>
          ) : null}
          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__euDId)}
            >
              <Fetcher
                data-plasmic-name={"fetcher"}
                data-plasmic-override={overrides.fetcher}
                className={classNames("__wab_instance", sty.fetcher)}
                endpoint={"match" as const}
                name={"matches" as const}
              >
                <ph.DataCtxReader>
                  {$ctx =>
                    (
                      (() => {
                        try {
                          return [...Array(8).keys()].map(k =>
                            String.fromCharCode("A".charCodeAt(0) + k)
                          );
                        } catch (e) {
                          if (e instanceof TypeError) {
                            return [];
                          }
                          throw e;
                        }
                      })() ?? []
                    ).map((currentGroup, currentIndex) => (
                      <GrupoRodadas
                        data-plasmic-name={"grupoRodadas"}
                        data-plasmic-override={overrides.grupoRodadas}
                        className={classNames(
                          "__wab_instance",
                          sty.grupoRodadas
                        )}
                        currentGroup={currentGroup}
                        key={currentIndex}
                      />
                    ))
                  }
                </ph.DataCtxReader>
              </Fetcher>
            </p.Stack>
          ) : null}

          <div className={classNames(projectcss.all, sty.freeBox___2UmF)} />

          {(() => {
            try {
              return $props.needsSave;
            } catch (e) {
              if (e instanceof TypeError) {
                return true;
              }
              throw e;
            }
          })() ? (
            <Button
              data-plasmic-name={"save"}
              data-plasmic-override={overrides.save}
              className={classNames("__wab_instance", sty.save)}
              endIcon={
                <SaveIconsvgIcon
                  data-plasmic-name={"svg"}
                  data-plasmic-override={overrides.svg}
                  className={classNames(projectcss.all, sty.svg)}
                  role={"img"}
                />
              }
              showEndIcon={true}
            >
              {"Salvar"}
            </Button>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "fetcher", "grupoRodadas", "save", "svg"],
  header: ["header"],
  fetcher: ["fetcher", "grupoRodadas"],
  grupoRodadas: ["grupoRodadas"],
  save: ["save", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  fetcher: typeof Fetcher;
  grupoRodadas: typeof GrupoRodadas;
  save: typeof Button;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPartidas__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPartidas__VariantsArgs;
    args?: PlasmicPartidas__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPartidas__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicPartidas__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicPartidas__ArgProps,
          internalVariantPropNames: PlasmicPartidas__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicPartidas__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPartidas";
  } else {
    func.displayName = `PlasmicPartidas.${nodeName}`;
  }
  return func;
}

export const PlasmicPartidas = Object.assign(
  // Top-level PlasmicPartidas renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    fetcher: makeNodeComponent("fetcher"),
    grupoRodadas: makeNodeComponent("grupoRodadas"),
    save: makeNodeComponent("save"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicPartidas
    internalVariantProps: PlasmicPartidas__VariantProps,
    internalArgProps: PlasmicPartidas__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicPartidas;
/* prettier-ignore-end */
