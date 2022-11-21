// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: r6sSLbmSTeVjqGUVythgwH
// Component: u2MWSbFe2Y
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
import { SupabaseFetcher } from "../../supabase"; // plasmic-import: tL8giM5hYy/codeComponent
import { TableWrapper } from "@plasmicpkgs/antd/skinny/registerTable"; // plasmic-import: kWbJIG4IgB/codeComponent
import { TableColumn } from "@plasmicpkgs/antd/skinny/registerTable"; // plasmic-import: Mj3elNqVoI/codeComponent
import { TableValue } from "@plasmicpkgs/antd/skinny/registerTable"; // plasmic-import: l40Ox6HDSg/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_bolao.module.css"; // plasmic-import: r6sSLbmSTeVjqGUVythgwH/projectcss
import sty from "./PlasmicRanking.module.css"; // plasmic-import: u2MWSbFe2Y/css

export type PlasmicRanking__VariantMembers = {};

export type PlasmicRanking__VariantsArgs = {};
type VariantPropType = keyof PlasmicRanking__VariantsArgs;
export const PlasmicRanking__VariantProps = new Array<VariantPropType>();

export type PlasmicRanking__ArgsType = {};
type ArgPropType = keyof PlasmicRanking__ArgsType;
export const PlasmicRanking__ArgProps = new Array<ArgPropType>();

export type PlasmicRanking__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  fetcher?: p.Flex<typeof Fetcher>;
  antdTable?: p.Flex<typeof TableWrapper>;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  antdTableValue2?: p.Flex<typeof TableValue>;
};

export interface DefaultRankingProps {}

function PlasmicRanking__RenderFunc(props: {
  variants: PlasmicRanking__VariantsArgs;
  args: PlasmicRanking__ArgsType;
  overrides: PlasmicRanking__OverridesType;

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

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            sty.root
          )}
        >
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__lTAo)}>
              <Header
                data-plasmic-name={"header"}
                data-plasmic-override={overrides.header}
                className={classNames("__wab_instance", sty.header)}
              />
            </div>
          ) : null}

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__h9Omr
            )}
          >
            {"Ranking"}
          </div>

          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__nFas6)}>
              <Fetcher
                data-plasmic-name={"fetcher"}
                data-plasmic-override={overrides.fetcher}
                className={classNames("__wab_instance", sty.fetcher)}
                endpoint={"match" as const}
                name={"match" as const}
              >
                <ph.DataCtxReader>
                  {$ctx => (
                    <SupabaseFetcher
                      className={classNames(
                        "__wab_instance",
                        sty.supabaseFetcher__a4Kfh
                      )}
                      queryName={"bets" as const}
                      table={"bets" as const}
                    >
                      <ph.DataCtxReader>
                        {$ctx => (
                          <SupabaseFetcher
                            className={classNames(
                              "__wab_instance",
                              sty.supabaseFetcher__uUa8U
                            )}
                            filter={[
                              { column: "paid", operator: "eq", value: true }
                            ]}
                            queryName={"users" as const}
                            table={"users" as const}
                          >
                            <ph.DataCtxReader>
                              {$ctx => (
                                <TableWrapper
                                  data-plasmic-name={"antdTable"}
                                  data-plasmic-override={overrides.antdTable}
                                  className={classNames(
                                    "__wab_instance",
                                    sty.antdTable
                                  )}
                                  columns={
                                    <React.Fragment>
                                      <TableColumn
                                        className={classNames(
                                          "__wab_instance",
                                          sty.antdTableColumn2__o2SpI
                                        )}
                                        columnTemplate={
                                          <ph.DataCtxReader>
                                            {$ctx => (
                                              <div
                                                className={classNames(
                                                  projectcss.all,
                                                  sty.freeBox__hOWj
                                                )}
                                              >
                                                <div
                                                  className={classNames(
                                                    projectcss.all,
                                                    projectcss.__wab_text,
                                                    sty.text__iBdWh
                                                  )}
                                                >
                                                  {(() => {
                                                    try {
                                                      return $ctx.currentRow
                                                        .pos;
                                                    } catch (e) {
                                                      if (
                                                        e instanceof TypeError
                                                      ) {
                                                        return "Enter some text";
                                                      }
                                                      throw e;
                                                    }
                                                  })()}
                                                </div>
                                              </div>
                                            )}
                                          </ph.DataCtxReader>
                                        }
                                        dataIndex={"" as const}
                                        title={"#" as const}
                                      />

                                      <TableColumn
                                        className={classNames(
                                          "__wab_instance",
                                          sty.antdTableColumn2__mdHnK
                                        )}
                                        columnTemplate={
                                          <ph.DataCtxReader>
                                            {$ctx => (
                                              <p.PlasmicLink
                                                data-plasmic-name={"link"}
                                                data-plasmic-override={
                                                  overrides.link
                                                }
                                                className={classNames(
                                                  projectcss.all,
                                                  projectcss.a,
                                                  sty.link
                                                )}
                                                component={Link}
                                                href={(() => {
                                                  try {
                                                    return `visualizar/${$ctx.currentRow.id}`;
                                                  } catch (e) {
                                                    if (
                                                      e instanceof TypeError
                                                    ) {
                                                      return undefined;
                                                    }
                                                    throw e;
                                                  }
                                                })()}
                                                platform={"nextjs"}
                                              >
                                                <TableValue
                                                  data-plasmic-name={
                                                    "antdTableValue2"
                                                  }
                                                  data-plasmic-override={
                                                    overrides.antdTableValue2
                                                  }
                                                  className={classNames(
                                                    "__wab_instance",
                                                    sty.antdTableValue2
                                                  )}
                                                />
                                              </p.PlasmicLink>
                                            )}
                                          </ph.DataCtxReader>
                                        }
                                        dataIndex={"user" as const}
                                        title={"Nome" as const}
                                      />

                                      <TableColumn
                                        className={classNames(
                                          "__wab_instance",
                                          sty.antdTableColumn2__ax8P7
                                        )}
                                        columnTemplate={
                                          <ph.DataCtxReader>
                                            {$ctx => (
                                              <div
                                                className={classNames(
                                                  projectcss.all,
                                                  sty.freeBox__hSs9
                                                )}
                                              >
                                                <TableValue
                                                  className={classNames(
                                                    "__wab_instance",
                                                    sty.antdTableValue2__rc9H4
                                                  )}
                                                />
                                              </div>
                                            )}
                                          </ph.DataCtxReader>
                                        }
                                        dataIndex={"pts" as const}
                                        title={"P" as const}
                                      />

                                      <TableColumn
                                        className={classNames(
                                          "__wab_instance",
                                          sty.antdTableColumn2___4Pe7X
                                        )}
                                        columnTemplate={
                                          <ph.DataCtxReader>
                                            {$ctx => (
                                              <div
                                                className={classNames(
                                                  projectcss.all,
                                                  sty.freeBox__cDfI0
                                                )}
                                              >
                                                <TableValue
                                                  className={classNames(
                                                    "__wab_instance",
                                                    sty.antdTableValue2__cJkaa
                                                  )}
                                                />
                                              </div>
                                            )}
                                          </ph.DataCtxReader>
                                        }
                                        dataIndex={"j" as const}
                                        title={"J" as const}
                                      />

                                      <TableColumn
                                        className={classNames(
                                          "__wab_instance",
                                          sty.antdTableColumn2__ppbEu
                                        )}
                                        columnTemplate={
                                          <ph.DataCtxReader>
                                            {$ctx => (
                                              <div
                                                className={classNames(
                                                  projectcss.all,
                                                  sty.freeBox__ibAOn
                                                )}
                                              >
                                                <TableValue
                                                  className={classNames(
                                                    "__wab_instance",
                                                    sty.antdTableValue2__rIhgG
                                                  )}
                                                />
                                              </div>
                                            )}
                                          </ph.DataCtxReader>
                                        }
                                        dataIndex={"cravadas" as const}
                                        title={"C" as const}
                                      />

                                      <TableColumn
                                        className={classNames(
                                          "__wab_instance",
                                          sty.antdTableColumn2__lz3W2
                                        )}
                                        columnTemplate={
                                          <ph.DataCtxReader>
                                            {$ctx => (
                                              <div
                                                className={classNames(
                                                  projectcss.all,
                                                  sty.freeBox___5Idpj
                                                )}
                                              >
                                                <TableValue
                                                  className={classNames(
                                                    "__wab_instance",
                                                    sty.antdTableValue2___01Khk
                                                  )}
                                                />
                                              </div>
                                            )}
                                          </ph.DataCtxReader>
                                        }
                                        dataIndex={"vencedor" as const}
                                        title={"V" as const}
                                      />
                                    </React.Fragment>
                                  }
                                  items={$ctx.users
                                    .map(user => {
                                      let three = 0;
                                      let one = 0;
                                      let jogos = 0;
                                      $ctx.match?.data
                                        ?.filter(
                                          match =>
                                            match.time_elapsed !== "notstarted"
                                        )
                                        .forEach(match => {
                                          jogos++;
                                          const bet = $ctx.bets?.find(
                                            bet =>
                                              bet.match_id === match._id &&
                                              bet.user_id === user.id
                                          );
                                          if (bet) {
                                            const diffReal =
                                              match.away_score -
                                              match.home_score;
                                            const myDiff =
                                              bet.away_score - bet.home_score;
                                            if (
                                              match.away_score ===
                                                bet.away_score &&
                                              diffReal === myDiff
                                            ) {
                                              three++;
                                            } else if (
                                              myDiff * diffReal > 0 ||
                                              (myDiff === 0 && diffReal === 0)
                                            ) {
                                              one++;
                                            }
                                          }
                                        });
                                      return {
                                        user: user.name,
                                        pts: three * 3 + one,
                                        cravadas: three,
                                        vencedor: one,
                                        id: user.id,
                                        j: jogos
                                      };
                                    })
                                    .sort((a, b) => b.pts - a.pts)
                                    .map((row, i, arr) => {
                                      if (i === 0) {
                                        return {
                                          ...row,
                                          pos: i + 1
                                        };
                                      } else if (arr[i - 1].pts === row.pts) {
                                        return {
                                          ...row,
                                          pos: arr[i - 1].pos
                                        };
                                      } else {
                                        return {
                                          ...row,
                                          pos: i + 1
                                        };
                                      }
                                    })}
                                  pagination={false}
                                  scroll={{ x: true }}
                                />
                              )}
                            </ph.DataCtxReader>
                          </SupabaseFetcher>
                        )}
                      </ph.DataCtxReader>
                    </SupabaseFetcher>
                  )}
                </ph.DataCtxReader>
              </Fetcher>
            </div>
          ) : null}
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "fetcher", "antdTable", "link", "antdTableValue2"],
  header: ["header"],
  fetcher: ["fetcher", "antdTable", "link", "antdTableValue2"],
  antdTable: ["antdTable", "link", "antdTableValue2"],
  link: ["link", "antdTableValue2"],
  antdTableValue2: ["antdTableValue2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  fetcher: typeof Fetcher;
  antdTable: typeof TableWrapper;
  link: "a";
  antdTableValue2: typeof TableValue;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRanking__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRanking__VariantsArgs;
    args?: PlasmicRanking__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRanking__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicRanking__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicRanking__ArgProps,
          internalVariantPropNames: PlasmicRanking__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicRanking__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicRanking";
  } else {
    func.displayName = `PlasmicRanking.${nodeName}`;
  }
  return func;
}

export const PlasmicRanking = Object.assign(
  // Top-level PlasmicRanking renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    fetcher: makeNodeComponent("fetcher"),
    antdTable: makeNodeComponent("antdTable"),
    link: makeNodeComponent("link"),
    antdTableValue2: makeNodeComponent("antdTableValue2"),

    // Metadata about props expected for PlasmicRanking
    internalVariantProps: PlasmicRanking__VariantProps,
    internalArgProps: PlasmicRanking__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicRanking;
/* prettier-ignore-end */
