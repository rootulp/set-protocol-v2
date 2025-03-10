import { BigNumberish, BigNumber, Signer } from "ethers";
import { ether } from "../common";

import {
  CompoundPriceOracleMock,
  Comp,
  CompoundGovernorAlpha,
  CompoundGovernorBravoDelegate,
  CompoundGovernorBravoDelegator,
  CompoundTimelock,
  Comptroller,
  CERc20,
  CEther,
  PriceOracleProxy,
  Unitroller,
  WhitePaperInterestRateModel
} from "./../contracts/compound";
import {
  WETH9,
  DelegateRegistry
} from "./../contracts";

import { Address } from "./../types";

import { CERc20__factory } from "../../typechain/factories/CERc20__factory";
import { CEther__factory } from "../../typechain/factories/CEther__factory";
import { CompoundPriceOracleMock__factory } from "../../typechain/factories/CompoundPriceOracleMock__factory";
import { Comp__factory } from "../../typechain/factories/Comp__factory";
import { CompoundGovernorAlpha__factory } from "../../typechain/factories/CompoundGovernorAlpha__factory";
import { CompoundGovernorBravoDelegator__factory } from "../../typechain/factories/CompoundGovernorBravoDelegator__factory";
import { CompoundGovernorBravoDelegate__factory } from "../../typechain/factories/CompoundGovernorBravoDelegate__factory";
import { CompoundTimelock__factory } from "../../typechain/factories/CompoundTimelock__factory";
import { Comptroller__factory } from "../../typechain/factories/Comptroller__factory";
import { PriceOracleProxy__factory } from "../../typechain/factories/PriceOracleProxy__factory";
import { Unitroller__factory } from "../../typechain/factories/Unitroller__factory";
import { WETH9__factory } from "../../typechain/factories/WETH9__factory";
import { WhitePaperInterestRateModel__factory } from "../../typechain/factories/WhitePaperInterestRateModel__factory";
import { LendingPoolAddressesProvider__factory } from "../../typechain/factories/LendingPoolAddressesProvider__factory";

import {
  AavePropositionPower,
  AaveProtoGovernance,
  AaveTokenV2Mintable,
  AssetVotingWeightProvider,
  CoreLibrary,
  DefaultReserveInterestRateStrategy,
  GovernanceParamsProvider,
  LendingPool,
  LendingPoolAddressesProvider,
  LendingPoolConfigurator,
  LendingPoolCore,
  LendingRateOracle,
  LendToAaveMigrator
} from "../contracts/aave";

import { AaveTokenV2Mintable__factory } from "../../typechain/factories/AaveTokenV2Mintable__factory";
import { AavePropositionPower__factory } from "../../typechain/factories/AavePropositionPower__factory";
import { AaveProtoGovernance__factory } from "../../typechain/factories/AaveProtoGovernance__factory";
import { AssetVotingWeightProvider__factory } from "../../typechain/factories/AssetVotingWeightProvider__factory";
import { LendingPoolCore__factory, LendingPoolCoreLibraryAddresses } from "../../typechain/factories/LendingPoolCore__factory";
import { CoreLibrary__factory } from "../../typechain/factories/CoreLibrary__factory";
import { GovernanceParamsProvider__factory } from "../../typechain/factories/GovernanceParamsProvider__factory";
import { LendingPool__factory } from "../../typechain/factories/LendingPool__factory";
import { DefaultReserveInterestRateStrategy__factory } from "../../typechain/factories/DefaultReserveInterestRateStrategy__factory";
import { LendingPoolConfigurator__factory } from "../../typechain/factories/LendingPoolConfigurator__factory";
import { LendingRateOracle__factory } from "../../typechain/factories/LendingRateOracle__factory";
import { LendingPoolDataProvider__factory } from "../../typechain/factories/LendingPoolDataProvider__factory";
import { LendingPoolDataProvider } from "../../typechain/LendingPoolDataProvider";
import { LendToAaveMigrator__factory } from "../../typechain/factories/LendToAaveMigrator__factory";

import {
  CurveDeposit,
  CurvePoolERC20,
  CRVToken,
  GaugeController,
  LiquidityGauge,
  LiquidityGaugeReward,
  Minter,
  Stableswap,
} from "../contracts/curve";

import { CurvePoolERC20__factory } from "../../typechain/factories/CurvePoolERC20__factory";
import { Stableswap__factory } from "../../typechain/factories/Stableswap__factory";
import { CurveDeposit__factory } from "../../typechain/factories/CurveDeposit__factory";
import { CRVToken__factory } from "../../typechain/factories/CRVToken__factory";
import { GaugeController__factory } from "../../typechain/factories/GaugeController__factory";
import { LiquidityGaugeReward__factory } from "../../typechain/factories/LiquidityGaugeReward__factory";
import { Minter__factory } from "../../typechain/factories/Minter__factory";
import { LiquidityGauge__factory } from "../../typechain/factories/LiquidityGauge__factory";

import {
  StakingRewards,
  Uni,
  UniswapGovernorAlpha,
  UniswapTimelock,
  UniswapV2Factory,
  UniswapV2Pair,
  UniswapV2Router02,
} from "../contracts/uniswap";

import { StakingRewards__factory } from "../../typechain/factories/StakingRewards__factory";
import { Uni__factory } from "../../typechain/factories/Uni__factory";
import { UniswapGovernorAlpha__factory } from "../../typechain/factories/UniswapGovernorAlpha__factory";
import { UniswapTimelock__factory } from "../../typechain/factories/UniswapTimelock__factory";
import { UniswapV2Factory__factory } from "../../typechain/factories/UniswapV2Factory__factory";
import { UniswapV2Pair__factory } from "../../typechain/factories/UniswapV2Pair__factory";
import { UniswapV2Router02__factory } from "../../typechain/factories/UniswapV2Router02__factory";

import {
  BFactory,
  BRegistry,
  ExchangeProxy
} from "../contracts/balancer";
import { BFactory__factory } from "../../typechain/factories/BFactory__factory";
import { BRegistry__factory } from "../../typechain/factories/BRegistry__factory";
import { ExchangeProxy__factory } from "../../typechain/factories/ExchangeProxy__factory";

import { DelegateRegistry__factory } from "../../typechain/factories/DelegateRegistry__factory";


import {
  Vault,
  Registry
} from "../contracts/yearn";
import { Registry__factory } from "../../typechain/factories/Registry__factory";
import { Vault__factory } from "../../typechain/factories/Vault__factory";

import {
  KyberNetworkTokenV2,
  DMMFactory,
  DMMPool,
  DMMRouter02
} from "../contracts/kyberV3";
import { DMMFactory__factory } from "../../typechain/factories/DMMFactory__factory";
import { DMMRouter02__factory } from "../../typechain/factories/DMMRouter02__factory";
import { DMMPool__factory } from "../../typechain/factories/DMMPool__factory";
import { KyberNetworkTokenV2__factory } from "../../typechain/factories/KyberNetworkTokenV2__factory";


import {
  TokenSwap
} from "../contracts/index";
import { TokenSwap__factory } from "../../typechain/factories/TokenSwap__factory";

import {
  SingularityNetToken
} from "../contracts/index";
import { SingularityNetToken__factory } from "../../typechain/factories/SingularityNetToken__factory";

import {
  SwapRouter,
  UniswapV3Factory,
  NonfungiblePositionManager,
  Quoter,
  NFTDescriptor
} from "../contracts/uniswapV3";
import { UniswapV3Factory__factory } from "../../typechain/factories/UniswapV3Factory__factory";
import { SwapRouter__factory } from "../../typechain/factories/SwapRouter__factory";
import { NonfungiblePositionManager__factory } from "../../typechain/factories/NonfungiblePositionManager__factory";
import { Quoter__factory } from "../../typechain/factories/Quoter__factory";
import { NFTDescriptor__factory } from "../../typechain/factories/NFTDescriptor__factory";

import {
  AaveGovernanceV2,
  AaveV2AToken,
  AaveV2StakedTokenIncentivesController,
  AaveV2StableDebtToken,
  AaveV2VariableDebtToken,
  AaveV2ProtocolDataProvider,
  AaveV2LendingPool,
  AaveV2LendingPoolAddressesProvider,
  AaveV2LendingPoolConfigurator,
  AaveV2LendingPoolCollateralManager,
  AaveV2DefaultReserveInterestRateStrategy,
  AaveV2LendingRateOracle,
  AaveV2Oracle,
  AaveV2PriceOracle,
  Executor,
  GovernanceStrategy,
  GenericLogic,
  ReserveLogic,
  ValidationLogic
} from "../contracts/aaveV2";
import { AaveV2LendingPool__factory } from "../../typechain/factories/AaveV2LendingPool__factory";
import { AaveV2LendingPoolAddressesProvider__factory } from "../../typechain/factories/AaveV2LendingPoolAddressesProvider__factory";
import { AaveV2ProtocolDataProvider__factory } from "../../typechain/factories/AaveV2ProtocolDataProvider__factory";
import { AaveV2LendingPoolConfigurator__factory } from "../../typechain/factories/AaveV2LendingPoolConfigurator__factory";
import { AaveV2LendingPoolCollateralManager__factory } from "../../typechain/factories/AaveV2LendingPoolCollateralManager__factory";
import { AaveV2DefaultReserveInterestRateStrategy__factory } from "../../typechain/factories/AaveV2DefaultReserveInterestRateStrategy__factory";
import { AaveV2AToken__factory } from "../../typechain/factories/AaveV2AToken__factory";
import { AaveV2StableDebtToken__factory } from "../../typechain/factories/AaveV2StableDebtToken__factory";
import { AaveV2VariableDebtToken__factory } from "../../typechain/factories/AaveV2VariableDebtToken__factory";
import { AaveV2StakedTokenIncentivesController__factory } from "../../typechain/factories/AaveV2StakedTokenIncentivesController__factory";
import { GenericLogic__factory } from "../../typechain/factories/GenericLogic__factory";
import { ValidationLogic__factory } from "../../typechain/factories/ValidationLogic__factory";
import { ReserveLogic__factory } from "../../typechain/factories/ReserveLogic__factory";
import { AaveV2LendingRateOracle__factory } from "../../typechain/factories/AaveV2LendingRateOracle__factory";
import { AaveV2Oracle__factory } from "../../typechain/factories/AaveV2Oracle__factory";
import { AaveV2PriceOracle__factory } from "../../typechain/factories/AaveV2PriceOracle__factory";
import { AaveGovernanceV2__factory } from "../../typechain/factories/AaveGovernanceV2__factory";
import { Executor__factory } from "../../typechain/factories/Executor__factory";
import { GovernanceStrategy__factory } from "../../typechain/factories/GovernanceStrategy__factory";

export default class DeployExternalContracts {
  private _deployerSigner: Signer;

  constructor(deployerSigner: Signer) {
    this._deployerSigner = deployerSigner;
  }

  // COMPOUND
  public async deployComp(_account: Address): Promise<Comp> {
    return await new Comp__factory(this._deployerSigner).deploy(_account);
  }

  public async deployCompoundTimelock(_admin: Address, _delay: BigNumber): Promise<CompoundTimelock> {
    return await new CompoundTimelock__factory(this._deployerSigner).deploy(_admin, _delay);
  }

  public async deployCompoundGovernorAlpha(_timelock: Address, _comp: Address, _guardian: Address): Promise<CompoundGovernorAlpha> {
    return await new CompoundGovernorAlpha__factory(this._deployerSigner).deploy(_timelock, _comp, _guardian);
  }

  public async deployCompoundGovernorBravoDelegate(): Promise<CompoundGovernorBravoDelegate> {
    return await new CompoundGovernorBravoDelegate__factory(this._deployerSigner).deploy();
  }

  public async deployCompoundGovernorBravoDelegator(
    timelock: Address,
    comp: Address,
    admin: Address,
    implementation: Address,
    votingPeriod: BigNumberish,
    votingDelay: BigNumberish,
    proposalThreshold: BigNumberish
  ): Promise<CompoundGovernorBravoDelegator> {
    return await new CompoundGovernorBravoDelegator__factory(this._deployerSigner).deploy(
      timelock,
      comp,
      admin,
      implementation,
      votingPeriod,
      votingDelay,
      proposalThreshold
    );
  }

  public async deployCeRc20(
    underlying: Address,
    comptroller: Address,
    interestRateModel: Address,
    initialExchangeRateMantissa: BigNumberish,
    name: string,
    symbol: string,
    decimals: BigNumberish
  ): Promise<CERc20> {
    return await new CERc20__factory(this._deployerSigner).deploy(
      underlying,
      comptroller,
      interestRateModel,
      initialExchangeRateMantissa,
      name,
      symbol,
      decimals,
    );
  }

  public async deployCEther(
    comptroller: Address,
    interestRateModel: Address,
    initialExchangeRateMantissa: BigNumberish,
    name: string,
    symbol: string,
    decimals: BigNumberish
  ): Promise<CEther> {
    return await new CEther__factory(this._deployerSigner).deploy(
      comptroller,
      interestRateModel,
      initialExchangeRateMantissa,
      name,
      symbol,
      decimals,
    );
  }

  public async deployCompoundPriceOracleMock(): Promise<CompoundPriceOracleMock> {
    return await new CompoundPriceOracleMock__factory(this._deployerSigner).deploy();
  }

  public async deployPriceOracleProxy(
    guardian: Address,
    v1PriceOracle: Address,
    cEthAddress: Address,
    cUsdcAddress: Address,
    cSaiAddress: Address,
    cDaiAddress: Address,
    cUsdtAddress: Address,
  ): Promise<PriceOracleProxy> {
    return await new PriceOracleProxy__factory(this._deployerSigner).deploy(
      guardian,
      v1PriceOracle,
      cEthAddress,
      cUsdcAddress,
      cSaiAddress,
      cDaiAddress,
      cUsdtAddress,
    );
  }

  public async deployComptroller(): Promise<Comptroller> {
    return await new Comptroller__factory(this._deployerSigner).deploy();
  }

  public async deployUnitroller(): Promise<Unitroller> {
    return await new Unitroller__factory(this._deployerSigner).deploy();
  }

  public async deployWhitePaperInterestRateModel(
    baseRate: BigNumberish,
    multiplier: BigNumberish
  ): Promise<WhitePaperInterestRateModel> {
    return await new WhitePaperInterestRateModel__factory(this._deployerSigner).deploy(baseRate, multiplier);
  }

  // WETH
  public async deployWETH(): Promise<WETH9> {
    return await new WETH9__factory(this._deployerSigner).deploy();
  }

  // AAVE
  public async deployAaveProtoGovernance(govParamsProvider: Address): Promise<AaveProtoGovernance> {
    return await new AaveProtoGovernance__factory(this._deployerSigner).deploy(govParamsProvider);
  }

  public async deployGovernanceParamsProvider(
    propositionPowerThreshold: BigNumber,
    propositionPower: Address,
    assetVotingWeightProvider: Address
  ): Promise<GovernanceParamsProvider> {
    return await new GovernanceParamsProvider__factory(this._deployerSigner).deploy(
      propositionPowerThreshold,
      propositionPower,
      assetVotingWeightProvider
    );
  }

  public async deployAavePropositionPower(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    council: Address[],
    cap: BigNumber,
  ): Promise<AavePropositionPower> {
    return await new AavePropositionPower__factory(this._deployerSigner).deploy(
      name,
      symbol,
      decimals,
      council,
      cap
    );
  }

  public async deployAssetVotingWeightProvider(
    assets: Address[],
    weights: BigNumber[],
  ): Promise<AssetVotingWeightProvider> {
    return await new AssetVotingWeightProvider__factory(this._deployerSigner).deploy(
      assets,
      weights
    );
  }

  public async deployLendingPoolAddressesProvider(): Promise<LendingPoolAddressesProvider> {
    return await new LendingPoolAddressesProvider__factory(this._deployerSigner).deploy();
  }

  public async deployCoreLibrary(): Promise<CoreLibrary> {
    return await new CoreLibrary__factory(this._deployerSigner).deploy();
  }

  public async deployLendingPoolCore(coreLibraryAddress: Address): Promise<LendingPoolCore> {
    const lendingPoolCoreLibraryAddresses: LendingPoolCoreLibraryAddresses = {
      __CoreLibrary___________________________: coreLibraryAddress,
    };
    return await new LendingPoolCore__factory(lendingPoolCoreLibraryAddresses, this._deployerSigner).deploy();
  }

  public async deployLendingPool(): Promise<LendingPool> {
    return await new LendingPool__factory(this._deployerSigner).deploy();
  }

  public async deployLendingPoolConfigurator(): Promise<LendingPoolConfigurator> {
    return await new LendingPoolConfigurator__factory(this._deployerSigner).deploy();
  }

  public async deployDefaultReserveInterestRateStrategy(
    _reserve: Address,
    _AddressProvider: Address,
    _baseVariableBorrowRate: BigNumberish = ether(1),
    _variableRateSlope1: BigNumberish = ether(1),
    _variableRateSlope2: BigNumberish = ether(1),
    _stableRateSlope1: BigNumberish = ether(1),
    _stableRateSlope2: BigNumberish = ether(1),
  ): Promise<DefaultReserveInterestRateStrategy> {
    return await new DefaultReserveInterestRateStrategy__factory(this._deployerSigner).deploy(
      _reserve,
      _AddressProvider,
      _baseVariableBorrowRate,
      _variableRateSlope1,
      _variableRateSlope2,
      _stableRateSlope1,
      _stableRateSlope2,
    );
  }

  public async deployLendingRateOracle(): Promise<LendingRateOracle> {
    return await new LendingRateOracle__factory(this._deployerSigner).deploy();
  }

  public async deployLendingPoolDataProvider(): Promise<LendingPoolDataProvider> {
    return await new LendingPoolDataProvider__factory(this._deployerSigner).deploy();
  }

  public async deployLendToAaveMigrator(
    _aaveToken: Address,
    _lendToken: Address,
    _aaveLendRatio: BigNumber,
  ): Promise<LendToAaveMigrator> {
    return await new LendToAaveMigrator__factory(this._deployerSigner).deploy(
      _aaveToken,
      _lendToken,
      _aaveLendRatio
    );
  }

  public async getLendToAaveMigrator(lendToAaveMigratorAddress: Address): Promise<LendToAaveMigrator> {
    return await new LendToAaveMigrator__factory(this._deployerSigner).attach(lendToAaveMigratorAddress);
  }

  // AAVE V2
  public async deployAaveV2LendingPoolAddressesProvider(marketId: string): Promise<AaveV2LendingPoolAddressesProvider> {
    return await new AaveV2LendingPoolAddressesProvider__factory(this._deployerSigner).deploy(marketId);
  }

  public async deployAaveV2LendingPool(validationLogicAddress: Address, reserveLogicAddress: Address): Promise<AaveV2LendingPool> {
    return await new AaveV2LendingPool__factory(
      {
        ["__$de8c0cf1a7d7c36c802af9a64fb9d86036$__"]: validationLogicAddress,
        ["__$22cd43a9dda9ce44e9b92ba393b88fb9ac$__"]: reserveLogicAddress,
      },
      this._deployerSigner
    ).deploy();
  }

  public async deployAaveV2LendingPoolConfigurator(): Promise<AaveV2LendingPoolConfigurator> {
    return await new AaveV2LendingPoolConfigurator__factory(this._deployerSigner).deploy();
  }

  public async deployAaveV2LendingPoolCollateralManager(): Promise<AaveV2LendingPoolCollateralManager> {
    return await new AaveV2LendingPoolCollateralManager__factory(this._deployerSigner).deploy();
  }

  public async deployAaveV2LendingRateOracle(): Promise<AaveV2LendingRateOracle> {
    return await new AaveV2LendingRateOracle__factory(this._deployerSigner).deploy();
  }

  public async deployAaveV2Oracle(
    assets: string[],
    sources: [],
    fallBackOracle: Address,
    weth: Address): Promise<AaveV2Oracle> {
    return await new AaveV2Oracle__factory(this._deployerSigner).deploy(assets, sources, fallBackOracle, weth);
  }

  public async deployAaveV2PriceOracle(): Promise<AaveV2PriceOracle> {
    return await new AaveV2PriceOracle__factory(this._deployerSigner).deploy();
  }

  public async deployAaveV2DefaultReserveInterestRateStrategy(
    _AddressesProvider: Address,
    _optimalUtilizationRate: BigNumberish = ether(1),
    _baseVariableBorrowRate: BigNumberish = ether(1),
    _variableRateSlope1: BigNumberish = ether(1),
    _variableRateSlope2: BigNumberish = ether(1),
    _stableRateSlope1: BigNumberish = ether(1),
    _stableRateSlope2: BigNumberish = ether(1),
  ): Promise<AaveV2DefaultReserveInterestRateStrategy> {
    return await new AaveV2DefaultReserveInterestRateStrategy__factory(this._deployerSigner).deploy(
      _AddressesProvider,
      _optimalUtilizationRate,
      _baseVariableBorrowRate,
      _variableRateSlope1,
      _variableRateSlope2,
      _stableRateSlope1,
      _stableRateSlope2,
    );
  }

  public async deployAaveV2ProtocolDataProvider(addressProvider: Address): Promise<AaveV2ProtocolDataProvider> {
    return await new AaveV2ProtocolDataProvider__factory(this._deployerSigner).deploy(addressProvider);
  }

  public async deployAaveV2AToken(): Promise<AaveV2AToken> {
    return await new AaveV2AToken__factory(this._deployerSigner).deploy();
  }

  public async deployAaveV2StableDebtToken(): Promise<AaveV2StableDebtToken> {
    return await new AaveV2StableDebtToken__factory(this._deployerSigner).deploy();
  }

  public async deployAaveV2VariableDebtToken(): Promise<AaveV2VariableDebtToken> {
    return await new AaveV2VariableDebtToken__factory(this._deployerSigner).deploy();
  }

  public async deployAaveV2StakedTokenIncentivesController(
    stakeToken: Address,
    emissionManager: Address
  ): Promise<AaveV2StakedTokenIncentivesController> {
    return await new AaveV2StakedTokenIncentivesController__factory(this._deployerSigner).deploy(
      stakeToken,
      emissionManager
    );
  }

  public getForkedAaveLendingPoolAddressesProvider(_mainnetAddressesProvider: Address): AaveV2LendingPoolAddressesProvider {
    return AaveV2LendingPoolAddressesProvider__factory.connect(_mainnetAddressesProvider, this._deployerSigner);
  }

  public getForkedAaveV2ProtocolDataProvider(_mainnetAddressesProvider: Address): AaveV2ProtocolDataProvider {
    return AaveV2ProtocolDataProvider__factory.connect(_mainnetAddressesProvider, this._deployerSigner);
  }

  // AAVE V2 LIBRARIES
  public async deployGeneralLogic(): Promise<GenericLogic> {
    return await new GenericLogic__factory(this._deployerSigner).deploy();
  }

  public async deployValidationLogic(genericLogicLibraryAddress: Address): Promise<ValidationLogic> {
    return await new ValidationLogic__factory(
      {
        ["__$52a8a86ab43135662ff256bbc95497e8e3$__"]: genericLogicLibraryAddress,
      },
      this._deployerSigner).deploy();
  }

  public async deployReserveLogic(): Promise<ReserveLogic> {
    return await new ReserveLogic__factory(this._deployerSigner).deploy();
  }

  // AAVE V2 GOVERNANCE
  public async deployAaveGovernanceV2(
    _governanceStrategy: Address,
    _votingDelay: BigNumber,
    _guardian: Address,
    _executors: Address[]
  ): Promise<AaveGovernanceV2> {
    return await new AaveGovernanceV2__factory(this._deployerSigner).deploy(_governanceStrategy, _votingDelay, _guardian, _executors);
  }

  public async deployExecutor(
    _admin: Address,
    _delay: BigNumber,
    _gracePeriod: BigNumber,
    _minimumDelay: BigNumber,
    _maximumDelay: BigNumber,
    _propositionThreshold: BigNumber,
    _voteDuration: BigNumber,
    _voteDifferential: BigNumber,
    _minmumQuorum: BigNumber
  ): Promise<Executor> {
    return await new Executor__factory(this._deployerSigner).deploy(
      _admin,
      _delay,
      _gracePeriod,
      _minimumDelay,
      _maximumDelay,
      _propositionThreshold,
      _voteDuration,
      _voteDifferential,
      _minmumQuorum,
    );
  }

  public async deployGovernanceStrategy(_aave: Address, _stkaave: Address): Promise<GovernanceStrategy> {
    return await new GovernanceStrategy__factory(this._deployerSigner).deploy(_aave, _stkaave);
  }

  public async deployAaveTokenV2Mintable(): Promise<AaveTokenV2Mintable> {
    return await new AaveTokenV2Mintable__factory(this._deployerSigner).deploy();
  }

  // Curve
  public async deployCurveDeposit(
    _coins: [string, string, string, string],
    _underlying_coins: [string, string, string, string],
    _curve: string,
    _token: string,
  ): Promise<CurveDeposit> {
    return await new CurveDeposit__factory(this._deployerSigner).deploy(_coins, _underlying_coins, _curve, _token);
  }

  public async deployCurvePoolERC20(
    _name: string,
    _symbol: string,
    _decimals: BigNumberish = 18,
    _supply: BigNumberish
  ): Promise<CurvePoolERC20> {
    return await new CurvePoolERC20__factory(this._deployerSigner).deploy(_name, _symbol, _decimals, _supply);
  }

  public async deployStableswap(
    _coins: [string, string, string, string],
    _underlying_coins: [string, string, string, string],
    _pool_token: string,
    _aCoefficient: BigNumberish = 1,
    _fee: BigNumberish = 0
  ): Promise<Stableswap> {
    return await new Stableswap__factory(this._deployerSigner).deploy(
      _coins,
      _underlying_coins,
      _pool_token,
      _aCoefficient,
      _fee
    );
  }

  public async deployCrvToken(_name: string, _symbol: string, _decimals: BigNumberish = 18): Promise<CRVToken> {
    return await new CRVToken__factory(this._deployerSigner).deploy(_name, _symbol, _decimals);
  }

  public async deployGaugeController(_token: string, _voting_escrow: string): Promise<GaugeController> {
    return await new GaugeController__factory(this._deployerSigner).deploy(_token, _voting_escrow);
  }

  public async deployLiquidityGaugeReward(
    _lpAddr: string,
    _minter: string,
    _reward_contract: string,
    _rewarded_token: string
  ): Promise<LiquidityGaugeReward> {
    return await new LiquidityGaugeReward__factory(this._deployerSigner).deploy(
      _lpAddr,
      _minter,
      _reward_contract,
      _rewarded_token
    );
  }

  public async deployLiquidityGauge(_lpAddr: string, _minter: string): Promise<LiquidityGauge> {
    return await new LiquidityGauge__factory(this._deployerSigner).deploy(_lpAddr, _minter);
  }

  public async deployMinter(_token: string, _controller: string): Promise<Minter> {
    return await new Minter__factory(this._deployerSigner).deploy(_token, _controller);
  }

  // Uniswap
  public async deployUni(_account: Address, _minter: Address, _mintingAllowedAfter: BigNumber): Promise<Uni> {
    return await new Uni__factory(this._deployerSigner).deploy(_account, _minter, _mintingAllowedAfter);
  }

  public async deployUniswapTimelock(_admin: Address, _delay: BigNumber): Promise<UniswapTimelock> {
    return await new UniswapTimelock__factory(this._deployerSigner).deploy(_admin, _delay);
  }

  public async deployUniswapGovernorAlpha(_timelock: Address, _uni: Address): Promise<UniswapGovernorAlpha> {
    return await new UniswapGovernorAlpha__factory(this._deployerSigner).deploy(_timelock, _uni);
  }

  public async deployUniswapV2Factory(_feeToSetter: string): Promise<UniswapV2Factory> {
    return await new UniswapV2Factory__factory(this._deployerSigner).deploy(_feeToSetter);
  }

  public async deployUniswapV2Router02(_factory: Address, _weth: Address): Promise<UniswapV2Router02> {
    return await new UniswapV2Router02__factory(this._deployerSigner).deploy(_factory, _weth);
  }

  public getForkedUniswapV2Router02(_mainnetRouter: Address): UniswapV2Router02 {
    return UniswapV2Router02__factory.connect(_mainnetRouter, this._deployerSigner);
  }

  public async deployUniswapV2Pair(_factory: Address, _weth: Address): Promise<UniswapV2Pair> {
    return await new UniswapV2Pair__factory(this._deployerSigner).deploy();
  }

  public async deployStakingRewards(
    _rewardsDistribution: Address,
    _rewardsToken: Address,
    _stakingToken: Address
  ): Promise<StakingRewards> {
    return await new StakingRewards__factory(this._deployerSigner).deploy(
      _rewardsDistribution,
      _rewardsToken,
      _stakingToken
    );
  }

  public async deployB__factory(): Promise<BFactory> {
    return await new BFactory__factory(this._deployerSigner).deploy();
  }

  public async deployExchangeProxy(weth: Address): Promise<ExchangeProxy> {
    return await new ExchangeProxy__factory(this._deployerSigner).deploy(weth);
  }

  public async deployBRegistry(factory: Address): Promise<BRegistry> {
    return await new BRegistry__factory(this._deployerSigner).deploy(factory);
  }

  public async deployDelegateRegistry(): Promise<DelegateRegistry> {
    return await new DelegateRegistry__factory(this._deployerSigner).deploy();
  }

  // YEARN
  public async deployVault(): Promise<Vault> {
    return await new Vault__factory(this._deployerSigner).deploy();
  }

  public async getVault(vaultAddress: Address): Promise<Vault> {
    return await new Vault__factory(this._deployerSigner).attach(vaultAddress);
  }

  public async deployRegistry(): Promise<Registry> {
    return await new Registry__factory(this._deployerSigner).deploy();
  }

  // KYBER V3 DMM
  public async deployKyberNetworkTokenV2(): Promise<KyberNetworkTokenV2> {
    return await new KyberNetworkTokenV2__factory(this._deployerSigner).deploy();
  }

  public async deployDMMFactory(_feeToSetter: string): Promise<DMMFactory> {
    return await new DMMFactory__factory(this._deployerSigner).deploy(_feeToSetter);
  }

  public async deployDMMRouter02(_factory: Address, _weth: Address): Promise<DMMRouter02> {
    return await new DMMRouter02__factory(this._deployerSigner).deploy(_factory, _weth);
  }

  public async deployDMMPool(): Promise<DMMPool> {
    return await new DMMPool__factory(this._deployerSigner).deploy();
  }

  // AXIE-INFINITY
  public async deployTokenSwap(oldToken: Address, newToken: Address): Promise<TokenSwap> {
    return await new TokenSwap__factory(this._deployerSigner).deploy(oldToken, newToken);
  }

  // Singularity Net
  public async deploySingularityNetToken(): Promise<SingularityNetToken> {
    return await new SingularityNetToken__factory(this._deployerSigner).deploy();
  }

  // Uniswap V3
  public async deployUniswapV3Factory(): Promise<UniswapV3Factory> {
    return await new UniswapV3Factory__factory(this._deployerSigner).deploy();
  }

  public async deploySwapRouter(factory: Address, weth: Address): Promise<SwapRouter> {
    return await new SwapRouter__factory(this._deployerSigner).deploy(factory, weth);
  }

  public async deployNftPositionManager(factory: Address, weth: Address, nftDesc: Address): Promise<NonfungiblePositionManager> {
    return await new NonfungiblePositionManager__factory(this._deployerSigner).deploy(factory, weth, nftDesc);
  }

  public async deployQuoter(factory: Address, weth: Address): Promise<Quoter> {
    return await new Quoter__factory(this._deployerSigner).deploy(factory, weth);
  }

  public async deployNFTDescriptor(): Promise<NFTDescriptor> {
    return await new NFTDescriptor__factory(this._deployerSigner).deploy();
  }
}
