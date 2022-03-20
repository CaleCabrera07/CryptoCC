import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function QuickStart({ isServerInfo }) {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch],
  );
  isInchDex && console.log("isInchDex", isInchDex);
  isServerInfo && console.log("isServerInfo", isServerInfo);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Card
        style={styles.card}
        title={
          <>
            👋🏻 <Text strong>Hi there!</Text>
          </>
        }
      >
        <Timeline mode="left" style={styles.timeline}>
          <Timeline.Item dot="😲">
            <Text style={styles.text}>
              Welcome to the cool all-in-one crypto website
              {/* {" "}
              <a
                href="https://github.com/ethereum-boilerplate/ethereum-boilerplate#-quick-start"
                target="_blank"
                rel="noopener noreferrer"
              >
                ethereum-boilerplate
              </a>{" "} */}
            </Text>
          </Timeline.Item>

          <Timeline.Item dot="💼">
            <Text style={styles.text}>Here, you can check your wallet balance</Text>
          </Timeline.Item>

          <Timeline.Item dot="💰">
            <Text style={styles.text}>Swap your cryptos with others</Text>
          </Timeline.Item>

          <Timeline.Item dot="💾">
            <Text style={styles.text}>Check your transactions history </Text>
          </Timeline.Item>

          <Timeline.Item dot="🎨">
            {/* <Text delete={isServerInfo} style={styles.text}> */}
            <Text style={styles.text}>NFTs, check them out here!</Text>
          </Timeline.Item>

          <Timeline.Item dot="🚀">
            <Text style={styles.text}>LET'S START!</Text>
          </Timeline.Item>
        </Timeline>
      </Card>
      <div>
        {/* <Card
          style={styles.card}
          title={
            <>
              💣 <Text strong>Starting Local Chain (optional)</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>
                Install{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.npmjs.com/package/truffle"
                >
                  Truffle
                </a>{" "}
                and{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.npmjs.com/package/ganache-cli"
                >
                  ganache-cli
                </a>{" "}
                <Text code>npm install -g ganache-cli truffle</Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="⚙️">
              <Text style={styles.text}>
                Start you local devchain: <Text code>npm run devchain</Text> on
                a new terminal
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="📡">
              <Text style={styles.text}>
                Deploy test contract: <Text code>npm run deploy</Text> on a new
                terminal
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="✅" style={styles.text}>
              <Text>
                Open the 📄<Text strong> Contract</Text> tab
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card> */}
        {/* <Card
          style={{ marginTop: "10px", ...styles.card }}
          title={
            <>
              📡{" "}
              <Text strong> Connecting your Local Chain to the Moralis DB</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="💿">
              <Text style={styles.text}>
                Download{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/fatedier/frp/releases"
                >
                  frpc
                </a>{" "}
                and provide missing params in the <Text code>.env</Text> file
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="⚙️">
              <Text style={styles.text}>
                Connect your Moralis Database and Local Chain:{" "}
                <Text code>npm run connect</Text>
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="💾">
              <Text style={styles.text}>
                Add contract events you want to watch:{" "}
                <Text code>npm run watch:events</Text>
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card> */}
      </div>
    </div>
  );
}
