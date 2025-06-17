"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, AreaChart, Area } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// 模拟专利数据
const patentData = [
  {
    id: "CN101644227B",
    citation: "US2008016863A1 | CN2668884Y | WO2008038825A1 | CN201129266Y | CN101260859A |",
    cited: "CN111720258A | CN106337771B | CN112432222A | WO2018035713A1 | CN106586844A | CN106586844B |",
    ipc: "F03B13/16",
    owner: "吕志林"
  },
  {
    id: "CN102392800A",
    citation: "CN101782049A | (A)CN1395036A | CN250938Y | CN2550497Y | (A)CN250938Y | CN1395036A |",
    cited: "CN11592807A",
    ipc: "F03G3/00",
    owner: "张永生 | 曹铁生 | 王臻"
  },
  {
    id: "US20120085984A1",
    citation: "()US335271A | ()US4281720A | ()US30580A | ()US5282714A | ()US263589A1 | ()US3028727A |",
    cited: "CN114542426A | WO2016019966A1 | US20150263589A1 | US9701387B2 | CN109707577A |",
    ipc: "B66D1/36",
    owner: "Individual"
  },
  {
    id: "......",
    citation: "......",
    cited: "......",
    ipc: "......",
    owner: "......"
  },
]

// 模拟技术领域数据
const technologyData = [
  { name: "pharmacology chemistry", value: 85 },
  { name: "drug screening assays", value: 78 },
  { name: "biochemistry molecular biology", value: 72 },
  { name: "medical general internal", value: 68 },
  { name: "cell biology", value: 65 },
  { name: "medicine research experimental", value: 62 },
  { name: "surgery", value: 58 },
  { name: "immunology", value: 55 },
  { name: "chemistry multidisciplinary", value: 52 },
  { name: "radiology nuclear medicine medical imaging", value: 48 },
  { name: "chemistry medicinal", value: 45 },
  { name: "endocrinology metabolism", value: 42 },
  { name: "respiratory system", value: 38 },
  { name: "peripheral vascular disease", value: 35 },
  { name: "neurosciences", value: 32 },
  { name: "genetics heredity", value: 28 },
  { name: "plant sciences", value: 25 },
  { name: "clinical neurology", value: 22 },
  { name: "biotechnology applied microbiology", value: 18 },
  { name: "gastroenterology hepatology", value: 15 },
]

// 模拟趋势数据
const trendData = [
  { year: "2015年", value1: 120, value2: 80, value3: 60 },
  { year: "2016年", value1: 140, value2: 90, value3: 70 },
  { year: "2017年", value1: 160, value2: 110, value3: 85 },
  { year: "2018年", value1: 180, value2: 130, value3: 100 },
  { year: "2019年", value1: 200, value2: 150, value3: 120 },
  { year: "2020年", value1: 170, value2: 140, value3: 110 },
  { year: "2021年", value1: 150, value2: 120, value3: 95 },
  { year: "2022年", value1: 130, value2: 100, value3: 80 },
]

export default function PatentAnalysisDashboard() {
  const [activeTab, setActiveTab] = useState("专利基础分析")

  // 渲染中间面板内容
  const renderMiddleContent = () => {
    switch (activeTab) {
      case "专利基础分析":
        return (
          <>
            <div className="relative h-96 bg-gradient-to-b from-blue-50 to-green-50 rounded-lg overflow-hidden mb-10">
              {/* 模拟世界地图背景 */}
              <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600&query=world+map+silhouette')] bg-center bg-no-repeat bg-contain opacity-20"></div>

              {/* 模拟专利分布点 */}
              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full opacity-70"></div>
              <div className="absolute top-1/3 left-1/2 w-6 h-6 bg-blue-600 rounded-full opacity-80"></div>
              <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
              <div className="absolute top-2/3 left-2/3 w-5 h-5 bg-blue-700 rounded-full opacity-75"></div>
              <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-teal-500 rounded-full opacity-70"></div>
              <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-teal-400 rounded-full opacity-60"></div>
              <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-green-500 rounded-full opacity-70"></div>

              {/* 图例 */}
              <div className="absolute bottom-2 left-4 bg-white p-0.5 rounded shadow text-xs">
                <div className="flex items-center gap-1 h-4">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>高密度专利区域</span>
                  <div className="w-2 h-2 bg-blue-400 rounded-full ml-2"></div>
                  <span>中等密度专利区域</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <ChartContainer
                config={{
                  value1: {
                    label: "系列1",
                    color: "hsl(var(--chart-1))",
                  },
                  value2: {
                    label: "系列2",
                    color: "hsl(var(--chart-2))",
                  },
                  value3: {
                    label: "系列3",
                    color: "hsl(var(--chart-3))",
                  },
                }}
                className="h-64 w-full"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Area
                      type="monotone"
                      dataKey="value1"
                      stackId="1"
                      stroke="var(--color-value1)"
                      fill="var(--color-value1)"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="value2"
                      stackId="1"
                      stroke="var(--color-value2)"
                      fill="var(--color-value2)"
                      fillOpacity={0.6}
                    />
                    <Area
                      type="monotone"
                      dataKey="value3"
                      stackId="1"
                      stroke="var(--color-value3)"
                      fill="var(--color-value3)"
                      fillOpacity={0.6}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </div>
          </>
        );
      case "专利网络构建":
        return (
          <div className="h-[calc(100vh-230px)] bg-white rounded-lg flex items-center justify-center">
            <p className="text-gray-500">专利网络构建可视化图表（待补充）</p>
          </div>
        );
      case "专利价值挖掘":
        return (
          <>
            <div className="h-96 bg-white rounded-lg mb-10 flex items-center justify-center">
              <p className="text-gray-500">专利关系网络图（待补充）</p>
            </div>
            <div className="mt-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-sm">节点</TableHead>
                    <TableHead className="text-sm">网络层</TableHead>
                    <TableHead className="text-sm">关键性</TableHead>
                    <TableHead className="text-sm">关键性权重</TableHead>
                    <TableHead className="text-sm">核心性</TableHead>
                    <TableHead className="text-sm">核心性权重</TableHead>
                    <TableHead className="text-sm">关键核心性</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {Array(4).fill(null).map((_, index) => (
                    <TableRow key={index} className="leading-none">
                      <TableCell className="text-xs px-6 whitespace-pre-line" style={{lineHeight:1, height:'24px'}}>-</TableCell>
                      <TableCell className="text-xs px-6 whitespace-pre-line" style={{lineHeight:1, height:'24px'}}>-</TableCell>
                      <TableCell className="text-xs px-6 whitespace-pre-line" style={{lineHeight:1, height:'24px'}}>-</TableCell>
                      <TableCell className="text-xs px-6 whitespace-pre-line" style={{lineHeight:1, height:'24px'}}>-</TableCell>
                      <TableCell className="text-xs px-6 whitespace-pre-line" style={{lineHeight:1, height:'24px'}}>-</TableCell>
                      <TableCell className="text-xs px-6 whitespace-pre-line" style={{lineHeight:1, height:'24px'}}>-</TableCell>
                      <TableCell className="text-xs px-6 whitespace-pre-line" style={{lineHeight:1, height:'24px'}}>-</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* 标题 */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">专利分析及价值挖掘系统</h1>

        {/* 导航按钮 */}
        <div className="flex justify-center gap-8 mb-8">
          {["专利基础分析", "专利网络构建", "专利价值挖掘"].map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "default" : "outline"}
              onClick={() => setActiveTab(tab)}
              className="px-6 py-2 text-base font-bold"
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>

      {/* 主要内容区域 */}
      <div className="grid grid-cols-12 gap-6 mb-6">
        {/* 左侧：专利数据表格 */}
        <div className="col-span-3 flex flex-col h-full overflow-x-auto">
          <div className="flex-1 flex flex-col gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-center">专利数据</CardTitle>
              </CardHeader>
              <CardContent className="overflow-x-auto">
                <Table className="w-full min-w-[2200px] table-fixed">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-sm w-[200px]">公开（公告）号</TableHead>
                      <TableHead className="text-sm w-[800px]">引文专利公开号</TableHead>
                      <TableHead className="text-sm w-[800px]">施引专利号</TableHead>
                      <TableHead className="text-sm w-[200px]">IPC分类</TableHead>
                      <TableHead className="text-sm w-[200px]">专利权人</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {patentData.map((patent, index) => (
                      <TableRow key={index} className="leading-none">
                        <TableCell className="text-xs px-6 whitespace-pre-line w-[200px]" style={{lineHeight:1, height:'24px'}}>{patent.id}</TableCell>
                        <TableCell className="text-xs px-6 whitespace-pre-line w-[800px]" style={{lineHeight:1, height:'24px'}}>{patent.citation}</TableCell>
                        <TableCell className="text-xs px-6 whitespace-pre-line w-[800px]" style={{lineHeight:1, height:'24px'}}>{patent.cited}</TableCell>
                        <TableCell className="text-xs px-6 whitespace-pre-line w-[200px]" style={{lineHeight:1, height:'24px'}}>{patent.ipc}</TableCell>
                        <TableCell className="text-xs px-6 whitespace-pre-line w-[200px]" style={{lineHeight:1, height:'24px'}}>{patent.owner}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* 工作流程 */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-lg text-center">网络数据处理与专利价值挖掘流程</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>1. 数据预处理</div>
                  <div>2. 网络构建</div>
                  <div>3. 网络层权重计算</div>
                  <div>4. 关键性指标计算</div>
                  <div>5. 核心性指标计算</div>
                  <div>6. 指标权重计算</div>
                  <div>7. 节点关键核心性计算</div>
                </div>
              </CardContent>
            </Card>

            {/* 操作按钮组 */}
            <Card className="mt-4">
              <CardContent className="p-4">
                <div className="flex justify-between gap-2">
                  <Button variant="outline" className="flex-1 text-base">数据导入</Button>
                  <Button variant="outline" className="flex-1 text-base">价值挖掘</Button>
                  <Button variant="outline" className="flex-1 text-base">结果导出</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 中间：根据activeTab显示不同内容 */}
        <div className="col-span-6">
          <Card className="h-full">
            <CardContent className="p-4">
              {renderMiddleContent()}
            </CardContent>
          </Card>

          {/* 版权信息 */}
          <div className="text-center mt-4">
            <p className="text-xs text-gray-600 leading-relaxed">
              版权所有© 武汉理工大学经济学院 维护：武汉理工大学经济学院<br />
              意见、建议和技术支持：dyswyr@whut.edu.cn
            </p>
          </div>
        </div>

        {/* 右侧：技术领域分布 */}
        <div className="col-span-3">
          <Card className="h-full">
            <CardContent className="p-2">
              <ChartContainer
                config={{
                  value: {
                    label: "专利数量",
                    color: "hsl(var(--chart-1))",
                  },
                }}
                className="h-[calc(100vh-230px)]"
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={technologyData.slice(0, 15)}
                    layout="horizontal"
                    margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 8 }} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="value" fill="var(--color-value)" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
