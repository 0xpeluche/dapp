/** import librairies */
import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import logo from "../../styles/assets/ethers.png";
import { Box, Flex, Text, Button, Input } from "@chakra-ui/react";
/** import files */
import Wallet from "../../artifacts/contracts/Wallet.sol/Wallet.json";

function App() {
  let walletAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const [balance, setBalance] = useState(0);
  const [amountSend, setAmountSend] = useState();
  const [amountWithdraw, setAmountWithdraw] = useState();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const getBalance = useCallback(async () => {
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(walletAddress, Wallet.abi, provider);
      try {
        let overrides = {
          from: accounts[0],
        };
        const data = await contract.getBalance(overrides);
        setBalance(String(data));
      } catch (err) {
        setError("An error occured");
      }
    }
  }, [walletAddress]);

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  const changeAmountSend = (e) => {
    setAmountSend(e.target.value);
  };

  const changeAmountWithdraw = (e) => {
    setAmountWithdraw(e.target.value);
  };

  const transfer = async () => {
    if (!amountSend) {
      return;
    }
    setError("");
    setSuccess("");
    if (typeof window.ethereum !== "undefined") {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      try {
        const tx = {
          from: accounts[0],
          to: walletAddress,
          value: ethers.utils.parseEther(amountSend),
        };
        const transaction = await signer.sendTransaction(tx);
        await transaction.wait();
        setAmountSend("");
        getBalance();
        setSuccess(
          `Your money has been successfully transferred to the wallet`
        );
      } catch (err) {
        setError("An error occured.");
      }
    }
  };

  const withdraw = async () => {
    if (!amountWithdraw) {
      return;
    }
    setError("");
    setSuccess("");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(walletAddress, Wallet.abi, signer);
    try {
      const transaction = await contract.withdrawAvailable(
        accounts[0],
        ethers.utils.parseEther(amountWithdraw)
      );
      await transaction.wait();
      setAmountWithdraw("");
      getBalance();
      setSuccess(`Your money has been successfully transferred to the wallet`);
    } catch (err) {
      setError(`An error occured.`);
    }
  };

  return (
    <Box textAlign="center" width="full" max-width="lg">
      <Flex flexDirection="column">
        <Text py={20} as="b" textStyle="subtitle__dark" lineHeight={4}>
          CBT Wallet
        </Text>
        <Box alignSelf="center">
          <img src={logo} alt="logo_ethers" width="240" />
        </Box>

        {error && (
          <Text m="0 auto" width="30%" textStyle="p__dark" background="red">
            {error}
          </Text>
        )}
        {success && (
          <Text
            m="0 auto"
            width="30%"
            textStyle="p__dark"
            background="lightgreen"
          >
            {success}
          </Text>
        )}
        <Text textStyle="h1__dark" lineHeight={2}>
          {balance / 10 ** 18} <span className="eth">Eth</span>
        </Text>
        <Flex mt={8} justifyContent="space-around">
          <Box w="50%">
            <Text as="b" textStyle="h3__dark" marginBottom={4}>
              Stake Ether
            </Text>
            <Box>
              <Input
                border="1px solid #393e45"
                w={48}
                height={8}
                borderTopLeftRadius="md"
                borderBottomLeftRadius="md"
                paddingLeft={4}
                paddingRight={4}
                type="text"
                placeholder="Amount in Ethers"
                onChange={changeAmountSend}
              />
              <Button
                as="b"
                border="1px solid #393e45"
                height={8}
                borderTopRightRadius="md"
                borderBottomRightRadius="md"
                paddingLeft={4}
                paddingRight={4}
                cursor="pointer"
                backgroundColor="#d1d5de"
                textStyle="h3__dark"
                onClick={transfer}
              >
                Send
              </Button>
            </Box>
          </Box>
          <Box w="50%">
            <Text as="b" textStyle="h3__dark" marginBottom={4}>
              Withdraw Ether
            </Text>
            <Box>
              <Input
                border="1px solid #393e45"
                w={48}
                height={8}
                borderTopLeftRadius="md"
                borderBottomLeftRadius="md"
                paddingLeft={4}
                paddingRight={4}
                type="text"
                placeholder="Amount in Ethers"
                onChange={changeAmountWithdraw}
              />
              <Button
                as="b"
                border="1px solid #393e45"
                height={8}
                borderTopRightRadius="md"
                borderBottomRightRadius="md"
                paddingLeft={4}
                paddingRight={4}
                cursor="pointer"
                backgroundColor="#d1d5de"
                textStyle="h3__dark"
                onClick={withdraw}
              >
                Withdraw
              </Button>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
