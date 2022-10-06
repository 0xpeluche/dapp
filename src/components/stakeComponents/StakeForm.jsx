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
    <Box width="100%" max-width="960px">
      <Flex flexDirection="column">
        <Text
          color="var(--secondary-color)"
          fontSize="36"
          lineHeight={4}
          fontWeight="700"
        >
          CBT Wallet
        </Text>
        <Box>
          <img src={logo} alt="logo_ethers" />
        </Box>

        {error && (
          <Text
            m="0 auto"
            width="30%"
            background="var(--primary-color)"
            color="var(--secondary-color)"
          >
            {error}
          </Text>
        )}
        {success && (
          <Text
            m="0 auto"
            width="30%"
            background="lightgreen"
            color="var(--secondary-color)"
          >
            {success}
          </Text>
        )}
        <Text
          color="var(--secondary-color)"
          fontSize="24"
          lineHeight={2}
          fontWeight="400"
        >
          {balance / 10 ** 18} <span className="eth">Eth</span>
        </Text>
        <Flex mt="2rem" justifyContent="space-around">
          <Box w="50%">
            <Text
              textAlign="center"
              color="var(--secondary-color)"
              fontSize="18"
              fontWeight="700"
              marginBottom="1rem"
            >
              Stake Ether
            </Text>
            <Input
              border="1px solid var(--secondary-color)"
              height="2rem"
              borderTopLeftRadius="5px"
              borderBottomLeftRadius="5px"
              paddingLeft="1rem"
              paddingRight="1rem"
              type="text"
              placeholder="Montant en Ethers"
              onChange={changeAmountSend}
            />
            <Button
              border="1px solid var(--secondary-color)"
              height="2rem"
              borderTopRightRadius="5px"
              borderBottomRightRadius="5px"
              paddingLeft="1rem"
              paddingRight="1rem"
              cursor="pointer"
              backgroundColor="#d1d5de"
              color="var(--secondary-color)"
              fontSize="18"
              fontWeight="700"
              onClick={transfer}
            >
              Send
            </Button>
          </Box>
          <Box w="50%">
            <Text
              textAlign="center"
              color="var(--secondary-color)"
              fontSize="18"
              fontWeight="700"
              marginBottom="1rem"
            >
              Withdraw Ether
            </Text>
            <Input
              border="1px solid var(--secondary-color)"
              height="2rem"
              borderTopLeftRadius="5px"
              borderBottomLeftRadius="5px"
              paddingLeft="1rem"
              paddingRight="1rem"
              type="text"
              placeholder="Montant en Ethers"
              onChange={changeAmountWithdraw}
            />
            <Button
              border="1px solid var(--secondary-color)"
              height="2rem"
              paddingLeft="1rem"
              paddingRight="1rem"
              cursor="pointer"
              backgroundColor="#d1d5de"
              color="var(--secondary-color)"
              fontSize="18"
              fontWeight="700"
              borderTopRightRadius="5px"
              borderBottomRightRadius="5px"
              onClick={withdraw}
            >
              Withdraw
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
}

export default App;
