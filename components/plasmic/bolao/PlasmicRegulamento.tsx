// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: r6sSLbmSTeVjqGUVythgwH
// Component: VbEzpHHmnC
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

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_bolao.module.css"; // plasmic-import: r6sSLbmSTeVjqGUVythgwH/projectcss
import sty from "./PlasmicRegulamento.module.css"; // plasmic-import: VbEzpHHmnC/css

export type PlasmicRegulamento__VariantMembers = {};

export type PlasmicRegulamento__VariantsArgs = {};
type VariantPropType = keyof PlasmicRegulamento__VariantsArgs;
export const PlasmicRegulamento__VariantProps = new Array<VariantPropType>();

export type PlasmicRegulamento__ArgsType = {};
type ArgPropType = keyof PlasmicRegulamento__ArgsType;
export const PlasmicRegulamento__ArgProps = new Array<ArgPropType>();

export type PlasmicRegulamento__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  ul?: p.Flex<"ul">;
  ol?: p.Flex<"ol">;
};

export interface DefaultRegulamentoProps {}

function PlasmicRegulamento__RenderFunc(props: {
  variants: PlasmicRegulamento__VariantsArgs;
  args: PlasmicRegulamento__ArgsType;
  overrides: PlasmicRegulamento__OverridesType;

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
            <div className={classNames(projectcss.all, sty.freeBox__mSrYr)}>
              <Header
                data-plasmic-name={"header"}
                data-plasmic-override={overrides.header}
                className={classNames("__wab_instance", sty.header)}
              />
            </div>
          ) : null}

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__vRwBl)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__r3BC
              )}
            >
              {"Regulamento do Bolão"}
            </div>

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ik5E
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {"Inscrição:"}
                </span>
                <React.Fragment>{" 20 Reais por pessoa\n\n"}</React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {"Pontuação:"}
                </span>
                <React.Fragment>{"\n"}</React.Fragment>
                {
                  <p.Stack
                    as={"ul"}
                    data-plasmic-name={"ul"}
                    data-plasmic-override={overrides.ul}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.ul,
                      sty.ul
                    )}
                  >
                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li__n0DLp
                      )}
                    >
                      {
                        "3 Pontos para quem acertar o vencedor e o placar do jogo."
                      }
                    </li>

                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li__tqVbb
                      )}
                    >
                      {"1 Pontos para quem acertar apenas o vencedor"}
                    </li>

                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li__gNjX
                      )}
                    >
                      {"5 Pontos para quem acertar o artilheiro."}
                    </li>

                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li__dmOes
                      )}
                    >
                      {"5 Pontos para quem acertar o campeão."}
                    </li>
                  </p.Stack>
                }
                <React.Fragment>{"\n"}</React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {"Critério de desempate:"}
                </span>
                <React.Fragment>{"\n"}</React.Fragment>
                {
                  <p.Stack
                    as={"ol"}
                    data-plasmic-name={"ol"}
                    data-plasmic-override={overrides.ol}
                    hasGap={true}
                    className={classNames(
                      projectcss.all,
                      projectcss.ol,
                      sty.ol
                    )}
                  >
                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li___24WRp
                      )}
                    >
                      {"Número de cravadas"}
                    </li>

                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li__mjrDm
                      )}
                    >
                      {"Palpite do campeão"}
                    </li>

                    <li
                      className={classNames(
                        projectcss.all,
                        projectcss.li,
                        projectcss.__wab_text,
                        sty.li__p8Q8I
                      )}
                    >
                      {"Palpite do artilheiro"}
                    </li>
                  </p.Stack>
                }
                <React.Fragment>{""}</React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ fontWeight: 700 }}
                >
                  {""}
                </span>
                <React.Fragment>{"\n"}</React.Fragment>
              </React.Fragment>
            </div>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "ul", "ol"],
  header: ["header"],
  ul: ["ul"],
  ol: ["ol"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  ul: "ul";
  ol: "ol";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRegulamento__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRegulamento__VariantsArgs;
    args?: PlasmicRegulamento__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRegulamento__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicRegulamento__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicRegulamento__ArgProps,
          internalVariantPropNames: PlasmicRegulamento__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicRegulamento__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRegulamento";
  } else {
    func.displayName = `PlasmicRegulamento.${nodeName}`;
  }
  return func;
}

export const PlasmicRegulamento = Object.assign(
  // Top-level PlasmicRegulamento renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    ul: makeNodeComponent("ul"),
    ol: makeNodeComponent("ol"),

    // Metadata about props expected for PlasmicRegulamento
    internalVariantProps: PlasmicRegulamento__VariantProps,
    internalArgProps: PlasmicRegulamento__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicRegulamento;
/* prettier-ignore-end */
