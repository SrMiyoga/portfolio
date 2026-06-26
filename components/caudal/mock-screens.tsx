/* Faithful CSS recreations of Caudal's key screens. These are decorative
   product mocks with a fixed dark palette (matching the app), independent of
   the site theme. Swap for real screenshots by setting `src` in lib/caudal.ts. */

const INK = "#0b0b0d";
const CARD = "#141418";
const LINE = "rgba(255,255,255,0.08)";
const MUTE = "#8b8b94";
const INDIGO = "#6366f1";
const GREEN = "#10b981";
const ROSE = "#f43f5e";
const AMBER = "#f59e0b";

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-2.5 pb-1 text-[9px] font-semibold text-white/80">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <span className="inline-block h-2 w-2.5 rounded-[2px] bg-white/60" />
        <span className="inline-block h-2 w-2 rounded-full bg-white/60" />
        <span className="inline-block h-2 w-3 rounded-[2px] bg-white/70" />
      </div>
    </div>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex h-full flex-col pt-5"
      style={{ background: INK, color: "#f4f4f5" }}
    >
      <StatusBar />
      <div className="flex-1 overflow-hidden px-4 pt-2">{children}</div>
    </div>
  );
}

function TabBar({ active }: { active: number }) {
  const tabs = ["Inicio", "Cuentas", "Análisis", "Deudas", "Ajustes"];
  return (
    <div
      className="mt-auto flex items-center justify-between px-4 py-2.5"
      style={{ borderTop: `1px solid ${LINE}` }}
    >
      {tabs.map((t, i) => (
        <div key={t} className="flex flex-col items-center gap-1">
          <span
            className="h-3.5 w-3.5 rounded-[5px]"
            style={{ background: i === active ? INDIGO : "rgba(255,255,255,0.18)" }}
          />
          <span
            className="text-[7px]"
            style={{ color: i === active ? "#fff" : MUTE }}
          >
            {t}
          </span>
        </div>
      ))}
    </div>
  );
}

export function MockDashboard() {
  return (
    <div className="flex h-full flex-col pt-5" style={{ background: INK, color: "#f4f4f5" }}>
      <StatusBar />
      <div className="flex-1 overflow-hidden px-4 pt-1">
        <p className="text-[10px]" style={{ color: MUTE }}>
          Hola, Pablo 👋
        </p>
        <p className="mt-0.5 text-[9px]" style={{ color: MUTE }}>
          Balance total
        </p>
        <p className="text-[26px] font-bold leading-tight">€4.182,50</p>

        <div className="mt-3 flex gap-2">
          {[
            { n: "Conjunta", v: "€2.840", c: INDIGO },
            { n: "Ahorro", v: "€1.200", c: GREEN },
            { n: "Personal", v: "€142", c: AMBER },
          ].map((a) => (
            <div
              key={a.n}
              className="flex-1 rounded-xl p-2"
              style={{ background: CARD, border: `1px solid ${LINE}` }}
            >
              <span
                className="block h-1.5 w-1.5 rounded-full"
                style={{ background: a.c }}
              />
              <p className="mt-1 text-[8px]" style={{ color: MUTE }}>
                {a.n}
              </p>
              <p className="text-[10px] font-semibold">{a.v}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[10px] font-semibold">Gastos por categoría</p>
        <div className="mt-2 space-y-1.5">
          {[
            { n: "Alimentación", p: 80, c: INDIGO },
            { n: "Hogar", p: 55, c: GREEN },
            { n: "Ocio", p: 35, c: AMBER },
          ].map((g) => (
            <div key={g.n}>
              <div className="flex justify-between text-[8px]" style={{ color: MUTE }}>
                <span>{g.n}</span>
              </div>
              <div className="mt-0.5 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="h-full rounded-full" style={{ width: `${g.p}%`, background: g.c }} />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[10px] font-semibold">Últimos movimientos</p>
        <div className="mt-2 space-y-1.5">
          {[
            { n: "Mercadona", t: "Alimentación", v: "-€42,30", c: ROSE },
            { n: "Nómina", t: "Ingreso", v: "+€1.850", c: GREEN },
            { n: "Spotify", t: "Suscripción", v: "-€9,99", c: ROSE },
          ].map((m) => (
            <div
              key={m.n}
              className="flex items-center justify-between rounded-lg p-2"
              style={{ background: CARD, border: `1px solid ${LINE}` }}
            >
              <div>
                <p className="text-[9px] font-medium">{m.n}</p>
                <p className="text-[7px]" style={{ color: MUTE }}>
                  {m.t}
                </p>
              </div>
              <p className="text-[9px] font-semibold" style={{ color: m.c }}>
                {m.v}
              </p>
            </div>
          ))}
        </div>
      </div>
      <TabBar active={0} />
    </div>
  );
}

export function MockAnalytics() {
  const bars = [40, 65, 50, 80, 60, 95];
  return (
    <Shell>
      <p className="text-[13px] font-bold">Análisis</p>
      <div
        className="mt-2 flex rounded-lg p-0.5 text-[8px]"
        style={{ background: CARD, border: `1px solid ${LINE}` }}
      >
        {["Tendencias", "Presupuesto", "Pronósticos"].map((t, i) => (
          <span
            key={t}
            className="flex-1 rounded-md py-1 text-center"
            style={{
              background: i === 2 ? INDIGO : "transparent",
              color: i === 2 ? "#fff" : MUTE,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      <div
        className="mt-3 rounded-xl p-3"
        style={{ background: CARD, border: `1px solid ${LINE}` }}
      >
        <p className="text-[8px]" style={{ color: MUTE }}>
          Proyección de gasto · junio
        </p>
        <p className="text-[16px] font-bold">€1.640 <span className="text-[9px]" style={{ color: AMBER }}>+8%</span></p>
        <div className="mt-2 flex h-16 items-end gap-1.5">
          {bars.map((b, i) => (
            <div key={i} className="flex-1 rounded-t" style={{ height: `${b}%`, background: i === 5 ? INDIGO : "rgba(99,102,241,0.35)" }} />
          ))}
        </div>
        <div className="mt-1 flex justify-between text-[6px]" style={{ color: MUTE }}>
          {["Ene", "Feb", "Mar", "Abr", "May", "Jun"].map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
      </div>

      <p className="mt-3 text-[9px] font-semibold">Ahorro proyectado</p>
      <div
        className="mt-1.5 flex items-center justify-between rounded-xl p-2.5"
        style={{ background: CARD, border: `1px solid ${LINE}` }}
      >
        <p className="text-[8px]" style={{ color: MUTE }}>
          Estimado fin de mes
        </p>
        <p className="text-[12px] font-bold" style={{ color: GREEN }}>
          +€420
        </p>
      </div>

      <div
        className="mt-2 flex items-center gap-2 rounded-xl p-2.5"
        style={{ background: "rgba(245,158,11,0.1)", border: `1px solid rgba(245,158,11,0.3)` }}
      >
        <span className="text-[12px]">⚠</span>
        <p className="text-[8px]" style={{ color: "#fcd9a0" }}>
          Ocio sube un 18% respecto a tu media
        </p>
      </div>
    </Shell>
  );
}

export function MockSplit() {
  return (
    <Shell>
      <div
        className="mx-auto mt-1 h-1 w-10 rounded-full"
        style={{ background: "rgba(255,255,255,0.2)" }}
      />
      <p className="mt-3 text-[13px] font-bold">Dividir gasto</p>
      <div
        className="mt-2 rounded-xl p-3"
        style={{ background: CARD, border: `1px solid ${LINE}` }}
      >
        <p className="text-[8px]" style={{ color: MUTE }}>
          Cena · La Trattoria
        </p>
        <p className="text-[20px] font-bold">€64,00</p>
      </div>

      <div
        className="mt-3 flex rounded-lg p-0.5 text-[8px]"
        style={{ background: CARD, border: `1px solid ${LINE}` }}
      >
        {["Igual", "Porcentaje", "Personalizado"].map((t, i) => (
          <span
            key={t}
            className="flex-1 rounded-md py-1 text-center"
            style={{ background: i === 0 ? INDIGO : "transparent", color: i === 0 ? "#fff" : MUTE }}
          >
            {t}
          </span>
        ))}
      </div>

      <p className="mt-3 text-[9px] font-semibold">Miembros</p>
      <div className="mt-1.5 space-y-1.5">
        {[
          { n: "Pablo", v: "€32,00", pays: true },
          { n: "Clara", v: "€32,00", pays: false },
        ].map((m) => (
          <div
            key={m.n}
            className="flex items-center justify-between rounded-lg p-2"
            style={{ background: CARD, border: `1px solid ${LINE}` }}
          >
            <div className="flex items-center gap-2">
              <span
                className="grid h-5 w-5 place-items-center rounded-full text-[8px] font-bold"
                style={{ background: INDIGO }}
              >
                {m.n[0]}
              </span>
              <div>
                <p className="text-[9px] font-medium">{m.n}</p>
                {m.pays && (
                  <p className="text-[7px]" style={{ color: GREEN }}>
                    Pagó la cuenta
                  </p>
                )}
              </div>
            </div>
            <p className="text-[10px] font-semibold">{m.v}</p>
          </div>
        ))}
      </div>

      <div
        className="mt-4 rounded-lg py-2 text-center text-[9px] font-semibold"
        style={{ background: INDIGO }}
      >
        Guardar reparto
      </div>
    </Shell>
  );
}

export function MockSettlements() {
  return (
    <Shell>
      <p className="text-[13px] font-bold">Deudas</p>
      <p className="mt-0.5 text-[8px]" style={{ color: MUTE }}>
        Saldo neto del hogar
      </p>

      <div
        className="mt-3 rounded-xl p-3"
        style={{ background: CARD, border: `1px solid ${LINE}` }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="grid h-6 w-6 place-items-center rounded-full text-[9px] font-bold" style={{ background: AMBER }}>
              C
            </span>
            <span className="text-[8px]" style={{ color: MUTE }}>
              →
            </span>
            <span className="grid h-6 w-6 place-items-center rounded-full text-[9px] font-bold" style={{ background: INDIGO }}>
              P
            </span>
          </div>
          <p className="text-[13px] font-bold" style={{ color: ROSE }}>
            €32,00
          </p>
        </div>
        <p className="mt-2 text-[8px]" style={{ color: MUTE }}>
          Clara debe a Pablo
        </p>
        <div
          className="mt-2 rounded-md py-1.5 text-center text-[8px] font-semibold"
          style={{ background: INDIGO }}
        >
          Saldar deuda
        </div>
      </div>

      <p className="mt-4 text-[9px] font-semibold">Historial</p>
      <div className="mt-1.5 space-y-1.5">
        {[
          { n: "Clara → Pablo", d: "12 jun", v: "€48,00" },
          { n: "Pablo → Clara", d: "3 jun", v: "€15,50" },
        ].map((s) => (
          <div
            key={s.d}
            className="flex items-center justify-between rounded-lg p-2"
            style={{ background: CARD, border: `1px solid ${LINE}` }}
          >
            <div>
              <p className="text-[9px] font-medium">{s.n}</p>
              <p className="text-[7px]" style={{ color: MUTE }}>
                {s.d} · liquidado
              </p>
            </div>
            <p className="text-[9px] font-semibold" style={{ color: GREEN }}>
              ✓ {s.v}
            </p>
          </div>
        ))}
      </div>
    </Shell>
  );
}

export function MockAccounts() {
  const accs = [
    { n: "Cuenta conjunta", t: "Conjunta · EUR", v: "€2.840,00", c: INDIGO },
    { n: "Ahorro", t: "Ahorro · EUR", v: "€1.200,00", c: GREEN },
    { n: "Efectivo", t: "Efectivo · EUR", v: "€142,50", c: AMBER },
    { n: "Tarjeta", t: "Tarjeta · ****4821", v: "-€320,00", c: ROSE },
  ];
  return (
    <Shell>
      <div className="flex items-center justify-between">
        <p className="text-[13px] font-bold">Cuentas</p>
        <span
          className="grid h-6 w-6 place-items-center rounded-full text-[12px] font-bold"
          style={{ background: INDIGO }}
        >
          +
        </span>
      </div>
      <div className="mt-3 space-y-2">
        {accs.map((a) => (
          <div
            key={a.n}
            className="flex items-center justify-between rounded-xl p-2.5"
            style={{ background: CARD, border: `1px solid ${LINE}` }}
          >
            <div className="flex items-center gap-2">
              <span
                className="grid h-7 w-7 place-items-center rounded-lg text-[10px]"
                style={{ background: `${a.c}22`, color: a.c }}
              >
                ◈
              </span>
              <div>
                <p className="text-[9px] font-semibold">{a.n}</p>
                <p className="text-[7px]" style={{ color: MUTE }}>
                  {a.t}
                </p>
              </div>
            </div>
            <p
              className="text-[10px] font-bold"
              style={{ color: a.v.startsWith("-") ? ROSE : "#f4f4f5" }}
            >
              {a.v}
            </p>
          </div>
        ))}
      </div>
      <TabBar active={1} />
    </Shell>
  );
}
