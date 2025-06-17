
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model course_of_study
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type course_of_study = $Result.DefaultSelection<Prisma.$course_of_studyPayload>
/**
 * Model faculty
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type faculty = $Result.DefaultSelection<Prisma.$facultyPayload>
/**
 * Model student
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type student = $Result.DefaultSelection<Prisma.$studentPayload>
/**
 * Model student_tag
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type student_tag = $Result.DefaultSelection<Prisma.$student_tagPayload>
/**
 * Model supervisor
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type supervisor = $Result.DefaultSelection<Prisma.$supervisorPayload>
/**
 * Model tag
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type tag = $Result.DefaultSelection<Prisma.$tagPayload>
/**
 * Model thesis_proposal
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type thesis_proposal = $Result.DefaultSelection<Prisma.$thesis_proposalPayload>
/**
 * Model thesis_proposal_tag
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type thesis_proposal_tag = $Result.DefaultSelection<Prisma.$thesis_proposal_tagPayload>
/**
 * Model user_parent
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 * This model contains row level security and requires additional setup for migrations. Visit https://pris.ly/d/row-level-security for more info.
 */
export type user_parent = $Result.DefaultSelection<Prisma.$user_parentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Course_of_studies
 * const course_of_studies = await prisma.course_of_study.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Course_of_studies
   * const course_of_studies = await prisma.course_of_study.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.course_of_study`: Exposes CRUD operations for the **course_of_study** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Course_of_studies
    * const course_of_studies = await prisma.course_of_study.findMany()
    * ```
    */
  get course_of_study(): Prisma.course_of_studyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.faculty`: Exposes CRUD operations for the **faculty** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faculties
    * const faculties = await prisma.faculty.findMany()
    * ```
    */
  get faculty(): Prisma.facultyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.studentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student_tag`: Exposes CRUD operations for the **student_tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Student_tags
    * const student_tags = await prisma.student_tag.findMany()
    * ```
    */
  get student_tag(): Prisma.student_tagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supervisor`: Exposes CRUD operations for the **supervisor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Supervisors
    * const supervisors = await prisma.supervisor.findMany()
    * ```
    */
  get supervisor(): Prisma.supervisorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.tagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.thesis_proposal`: Exposes CRUD operations for the **thesis_proposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Thesis_proposals
    * const thesis_proposals = await prisma.thesis_proposal.findMany()
    * ```
    */
  get thesis_proposal(): Prisma.thesis_proposalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.thesis_proposal_tag`: Exposes CRUD operations for the **thesis_proposal_tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Thesis_proposal_tags
    * const thesis_proposal_tags = await prisma.thesis_proposal_tag.findMany()
    * ```
    */
  get thesis_proposal_tag(): Prisma.thesis_proposal_tagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user_parent`: Exposes CRUD operations for the **user_parent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more User_parents
    * const user_parents = await prisma.user_parent.findMany()
    * ```
    */
  get user_parent(): Prisma.user_parentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    course_of_study: 'course_of_study',
    faculty: 'faculty',
    student: 'student',
    student_tag: 'student_tag',
    supervisor: 'supervisor',
    tag: 'tag',
    thesis_proposal: 'thesis_proposal',
    thesis_proposal_tag: 'thesis_proposal_tag',
    user_parent: 'user_parent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "course_of_study" | "faculty" | "student" | "student_tag" | "supervisor" | "tag" | "thesis_proposal" | "thesis_proposal_tag" | "user_parent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      course_of_study: {
        payload: Prisma.$course_of_studyPayload<ExtArgs>
        fields: Prisma.course_of_studyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.course_of_studyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_of_studyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.course_of_studyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_of_studyPayload>
          }
          findFirst: {
            args: Prisma.course_of_studyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_of_studyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.course_of_studyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_of_studyPayload>
          }
          findMany: {
            args: Prisma.course_of_studyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_of_studyPayload>[]
          }
          create: {
            args: Prisma.course_of_studyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_of_studyPayload>
          }
          createMany: {
            args: Prisma.course_of_studyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.course_of_studyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_of_studyPayload>[]
          }
          delete: {
            args: Prisma.course_of_studyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_of_studyPayload>
          }
          update: {
            args: Prisma.course_of_studyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_of_studyPayload>
          }
          deleteMany: {
            args: Prisma.course_of_studyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.course_of_studyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.course_of_studyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_of_studyPayload>[]
          }
          upsert: {
            args: Prisma.course_of_studyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$course_of_studyPayload>
          }
          aggregate: {
            args: Prisma.Course_of_studyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse_of_study>
          }
          groupBy: {
            args: Prisma.course_of_studyGroupByArgs<ExtArgs>
            result: $Utils.Optional<Course_of_studyGroupByOutputType>[]
          }
          count: {
            args: Prisma.course_of_studyCountArgs<ExtArgs>
            result: $Utils.Optional<Course_of_studyCountAggregateOutputType> | number
          }
        }
      }
      faculty: {
        payload: Prisma.$facultyPayload<ExtArgs>
        fields: Prisma.facultyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.facultyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facultyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.facultyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facultyPayload>
          }
          findFirst: {
            args: Prisma.facultyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facultyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.facultyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facultyPayload>
          }
          findMany: {
            args: Prisma.facultyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facultyPayload>[]
          }
          create: {
            args: Prisma.facultyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facultyPayload>
          }
          createMany: {
            args: Prisma.facultyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.facultyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facultyPayload>[]
          }
          delete: {
            args: Prisma.facultyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facultyPayload>
          }
          update: {
            args: Prisma.facultyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facultyPayload>
          }
          deleteMany: {
            args: Prisma.facultyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.facultyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.facultyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facultyPayload>[]
          }
          upsert: {
            args: Prisma.facultyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$facultyPayload>
          }
          aggregate: {
            args: Prisma.FacultyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaculty>
          }
          groupBy: {
            args: Prisma.facultyGroupByArgs<ExtArgs>
            result: $Utils.Optional<FacultyGroupByOutputType>[]
          }
          count: {
            args: Prisma.facultyCountArgs<ExtArgs>
            result: $Utils.Optional<FacultyCountAggregateOutputType> | number
          }
        }
      }
      student: {
        payload: Prisma.$studentPayload<ExtArgs>
        fields: Prisma.studentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.studentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.studentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findFirst: {
            args: Prisma.studentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.studentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          findMany: {
            args: Prisma.studentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          create: {
            args: Prisma.studentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          createMany: {
            args: Prisma.studentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.studentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          delete: {
            args: Prisma.studentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          update: {
            args: Prisma.studentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          deleteMany: {
            args: Prisma.studentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.studentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.studentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[]
          }
          upsert: {
            args: Prisma.studentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$studentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.studentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.studentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      student_tag: {
        payload: Prisma.$student_tagPayload<ExtArgs>
        fields: Prisma.student_tagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.student_tagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_tagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.student_tagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_tagPayload>
          }
          findFirst: {
            args: Prisma.student_tagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_tagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.student_tagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_tagPayload>
          }
          findMany: {
            args: Prisma.student_tagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_tagPayload>[]
          }
          create: {
            args: Prisma.student_tagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_tagPayload>
          }
          createMany: {
            args: Prisma.student_tagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.student_tagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_tagPayload>[]
          }
          delete: {
            args: Prisma.student_tagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_tagPayload>
          }
          update: {
            args: Prisma.student_tagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_tagPayload>
          }
          deleteMany: {
            args: Prisma.student_tagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.student_tagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.student_tagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_tagPayload>[]
          }
          upsert: {
            args: Prisma.student_tagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$student_tagPayload>
          }
          aggregate: {
            args: Prisma.Student_tagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent_tag>
          }
          groupBy: {
            args: Prisma.student_tagGroupByArgs<ExtArgs>
            result: $Utils.Optional<Student_tagGroupByOutputType>[]
          }
          count: {
            args: Prisma.student_tagCountArgs<ExtArgs>
            result: $Utils.Optional<Student_tagCountAggregateOutputType> | number
          }
        }
      }
      supervisor: {
        payload: Prisma.$supervisorPayload<ExtArgs>
        fields: Prisma.supervisorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.supervisorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.supervisorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorPayload>
          }
          findFirst: {
            args: Prisma.supervisorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.supervisorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorPayload>
          }
          findMany: {
            args: Prisma.supervisorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorPayload>[]
          }
          create: {
            args: Prisma.supervisorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorPayload>
          }
          createMany: {
            args: Prisma.supervisorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.supervisorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorPayload>[]
          }
          delete: {
            args: Prisma.supervisorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorPayload>
          }
          update: {
            args: Prisma.supervisorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorPayload>
          }
          deleteMany: {
            args: Prisma.supervisorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.supervisorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.supervisorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorPayload>[]
          }
          upsert: {
            args: Prisma.supervisorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$supervisorPayload>
          }
          aggregate: {
            args: Prisma.SupervisorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupervisor>
          }
          groupBy: {
            args: Prisma.supervisorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupervisorGroupByOutputType>[]
          }
          count: {
            args: Prisma.supervisorCountArgs<ExtArgs>
            result: $Utils.Optional<SupervisorCountAggregateOutputType> | number
          }
        }
      }
      tag: {
        payload: Prisma.$tagPayload<ExtArgs>
        fields: Prisma.tagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          findFirst: {
            args: Prisma.tagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          findMany: {
            args: Prisma.tagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>[]
          }
          create: {
            args: Prisma.tagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          createMany: {
            args: Prisma.tagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>[]
          }
          delete: {
            args: Prisma.tagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          update: {
            args: Prisma.tagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          deleteMany: {
            args: Prisma.tagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>[]
          }
          upsert: {
            args: Prisma.tagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.tagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      thesis_proposal: {
        payload: Prisma.$thesis_proposalPayload<ExtArgs>
        fields: Prisma.thesis_proposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.thesis_proposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.thesis_proposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposalPayload>
          }
          findFirst: {
            args: Prisma.thesis_proposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.thesis_proposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposalPayload>
          }
          findMany: {
            args: Prisma.thesis_proposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposalPayload>[]
          }
          create: {
            args: Prisma.thesis_proposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposalPayload>
          }
          createMany: {
            args: Prisma.thesis_proposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.thesis_proposalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposalPayload>[]
          }
          delete: {
            args: Prisma.thesis_proposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposalPayload>
          }
          update: {
            args: Prisma.thesis_proposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposalPayload>
          }
          deleteMany: {
            args: Prisma.thesis_proposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.thesis_proposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.thesis_proposalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposalPayload>[]
          }
          upsert: {
            args: Prisma.thesis_proposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposalPayload>
          }
          aggregate: {
            args: Prisma.Thesis_proposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateThesis_proposal>
          }
          groupBy: {
            args: Prisma.thesis_proposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<Thesis_proposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.thesis_proposalCountArgs<ExtArgs>
            result: $Utils.Optional<Thesis_proposalCountAggregateOutputType> | number
          }
        }
      }
      thesis_proposal_tag: {
        payload: Prisma.$thesis_proposal_tagPayload<ExtArgs>
        fields: Prisma.thesis_proposal_tagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.thesis_proposal_tagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposal_tagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.thesis_proposal_tagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposal_tagPayload>
          }
          findFirst: {
            args: Prisma.thesis_proposal_tagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposal_tagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.thesis_proposal_tagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposal_tagPayload>
          }
          findMany: {
            args: Prisma.thesis_proposal_tagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposal_tagPayload>[]
          }
          create: {
            args: Prisma.thesis_proposal_tagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposal_tagPayload>
          }
          createMany: {
            args: Prisma.thesis_proposal_tagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.thesis_proposal_tagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposal_tagPayload>[]
          }
          delete: {
            args: Prisma.thesis_proposal_tagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposal_tagPayload>
          }
          update: {
            args: Prisma.thesis_proposal_tagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposal_tagPayload>
          }
          deleteMany: {
            args: Prisma.thesis_proposal_tagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.thesis_proposal_tagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.thesis_proposal_tagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposal_tagPayload>[]
          }
          upsert: {
            args: Prisma.thesis_proposal_tagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$thesis_proposal_tagPayload>
          }
          aggregate: {
            args: Prisma.Thesis_proposal_tagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateThesis_proposal_tag>
          }
          groupBy: {
            args: Prisma.thesis_proposal_tagGroupByArgs<ExtArgs>
            result: $Utils.Optional<Thesis_proposal_tagGroupByOutputType>[]
          }
          count: {
            args: Prisma.thesis_proposal_tagCountArgs<ExtArgs>
            result: $Utils.Optional<Thesis_proposal_tagCountAggregateOutputType> | number
          }
        }
      }
      user_parent: {
        payload: Prisma.$user_parentPayload<ExtArgs>
        fields: Prisma.user_parentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.user_parentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_parentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.user_parentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_parentPayload>
          }
          findFirst: {
            args: Prisma.user_parentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_parentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.user_parentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_parentPayload>
          }
          findMany: {
            args: Prisma.user_parentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_parentPayload>[]
          }
          create: {
            args: Prisma.user_parentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_parentPayload>
          }
          createMany: {
            args: Prisma.user_parentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.user_parentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_parentPayload>[]
          }
          delete: {
            args: Prisma.user_parentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_parentPayload>
          }
          update: {
            args: Prisma.user_parentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_parentPayload>
          }
          deleteMany: {
            args: Prisma.user_parentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.user_parentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.user_parentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_parentPayload>[]
          }
          upsert: {
            args: Prisma.user_parentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$user_parentPayload>
          }
          aggregate: {
            args: Prisma.User_parentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser_parent>
          }
          groupBy: {
            args: Prisma.user_parentGroupByArgs<ExtArgs>
            result: $Utils.Optional<User_parentGroupByOutputType>[]
          }
          count: {
            args: Prisma.user_parentCountArgs<ExtArgs>
            result: $Utils.Optional<User_parentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    course_of_study?: course_of_studyOmit
    faculty?: facultyOmit
    student?: studentOmit
    student_tag?: student_tagOmit
    supervisor?: supervisorOmit
    tag?: tagOmit
    thesis_proposal?: thesis_proposalOmit
    thesis_proposal_tag?: thesis_proposal_tagOmit
    user_parent?: user_parentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Course_of_studyCountOutputType
   */

  export type Course_of_studyCountOutputType = {
    student_student_course_of_studyTocourse_of_study: number
  }

  export type Course_of_studyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student_student_course_of_studyTocourse_of_study?: boolean | Course_of_studyCountOutputTypeCountStudent_student_course_of_studyTocourse_of_studyArgs
  }

  // Custom InputTypes
  /**
   * Course_of_studyCountOutputType without action
   */
  export type Course_of_studyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course_of_studyCountOutputType
     */
    select?: Course_of_studyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Course_of_studyCountOutputType without action
   */
  export type Course_of_studyCountOutputTypeCountStudent_student_course_of_studyTocourse_of_studyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
  }


  /**
   * Count Type FacultyCountOutputType
   */

  export type FacultyCountOutputType = {
    course_of_study: number
    user_parent: number
  }

  export type FacultyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course_of_study?: boolean | FacultyCountOutputTypeCountCourse_of_studyArgs
    user_parent?: boolean | FacultyCountOutputTypeCountUser_parentArgs
  }

  // Custom InputTypes
  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FacultyCountOutputType
     */
    select?: FacultyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeCountCourse_of_studyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_of_studyWhereInput
  }

  /**
   * FacultyCountOutputType without action
   */
  export type FacultyCountOutputTypeCountUser_parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_parentWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    student_tag: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student_tag?: boolean | StudentCountOutputTypeCountStudent_tagArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountStudent_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: student_tagWhereInput
  }


  /**
   * Count Type SupervisorCountOutputType
   */

  export type SupervisorCountOutputType = {
    thesis_proposal: number
  }

  export type SupervisorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thesis_proposal?: boolean | SupervisorCountOutputTypeCountThesis_proposalArgs
  }

  // Custom InputTypes
  /**
   * SupervisorCountOutputType without action
   */
  export type SupervisorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupervisorCountOutputType
     */
    select?: SupervisorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupervisorCountOutputType without action
   */
  export type SupervisorCountOutputTypeCountThesis_proposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: thesis_proposalWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    student_tag: number
    thesis_proposal_tag: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student_tag?: boolean | TagCountOutputTypeCountStudent_tagArgs
    thesis_proposal_tag?: boolean | TagCountOutputTypeCountThesis_proposal_tagArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountStudent_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: student_tagWhereInput
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountThesis_proposal_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: thesis_proposal_tagWhereInput
  }


  /**
   * Count Type Thesis_proposalCountOutputType
   */

  export type Thesis_proposalCountOutputType = {
    thesis_proposal_tag: number
  }

  export type Thesis_proposalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    thesis_proposal_tag?: boolean | Thesis_proposalCountOutputTypeCountThesis_proposal_tagArgs
  }

  // Custom InputTypes
  /**
   * Thesis_proposalCountOutputType without action
   */
  export type Thesis_proposalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thesis_proposalCountOutputType
     */
    select?: Thesis_proposalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Thesis_proposalCountOutputType without action
   */
  export type Thesis_proposalCountOutputTypeCountThesis_proposal_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: thesis_proposal_tagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model course_of_study
   */

  export type AggregateCourse_of_study = {
    _count: Course_of_studyCountAggregateOutputType | null
    _min: Course_of_studyMinAggregateOutputType | null
    _max: Course_of_studyMaxAggregateOutputType | null
  }

  export type Course_of_studyMinAggregateOutputType = {
    course_name: string | null
    faculty_name: string | null
  }

  export type Course_of_studyMaxAggregateOutputType = {
    course_name: string | null
    faculty_name: string | null
  }

  export type Course_of_studyCountAggregateOutputType = {
    course_name: number
    faculty_name: number
    _all: number
  }


  export type Course_of_studyMinAggregateInputType = {
    course_name?: true
    faculty_name?: true
  }

  export type Course_of_studyMaxAggregateInputType = {
    course_name?: true
    faculty_name?: true
  }

  export type Course_of_studyCountAggregateInputType = {
    course_name?: true
    faculty_name?: true
    _all?: true
  }

  export type Course_of_studyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_of_study to aggregate.
     */
    where?: course_of_studyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_of_studies to fetch.
     */
    orderBy?: course_of_studyOrderByWithRelationInput | course_of_studyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: course_of_studyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_of_studies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_of_studies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned course_of_studies
    **/
    _count?: true | Course_of_studyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Course_of_studyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Course_of_studyMaxAggregateInputType
  }

  export type GetCourse_of_studyAggregateType<T extends Course_of_studyAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse_of_study]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse_of_study[P]>
      : GetScalarType<T[P], AggregateCourse_of_study[P]>
  }




  export type course_of_studyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: course_of_studyWhereInput
    orderBy?: course_of_studyOrderByWithAggregationInput | course_of_studyOrderByWithAggregationInput[]
    by: Course_of_studyScalarFieldEnum[] | Course_of_studyScalarFieldEnum
    having?: course_of_studyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Course_of_studyCountAggregateInputType | true
    _min?: Course_of_studyMinAggregateInputType
    _max?: Course_of_studyMaxAggregateInputType
  }

  export type Course_of_studyGroupByOutputType = {
    course_name: string
    faculty_name: string
    _count: Course_of_studyCountAggregateOutputType | null
    _min: Course_of_studyMinAggregateOutputType | null
    _max: Course_of_studyMaxAggregateOutputType | null
  }

  type GetCourse_of_studyGroupByPayload<T extends course_of_studyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Course_of_studyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Course_of_studyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Course_of_studyGroupByOutputType[P]>
            : GetScalarType<T[P], Course_of_studyGroupByOutputType[P]>
        }
      >
    >


  export type course_of_studySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    course_name?: boolean
    faculty_name?: boolean
    faculty?: boolean | facultyDefaultArgs<ExtArgs>
    student_student_course_of_studyTocourse_of_study?: boolean | course_of_study$student_student_course_of_studyTocourse_of_studyArgs<ExtArgs>
    _count?: boolean | Course_of_studyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_of_study"]>

  export type course_of_studySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    course_name?: boolean
    faculty_name?: boolean
    faculty?: boolean | facultyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_of_study"]>

  export type course_of_studySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    course_name?: boolean
    faculty_name?: boolean
    faculty?: boolean | facultyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course_of_study"]>

  export type course_of_studySelectScalar = {
    course_name?: boolean
    faculty_name?: boolean
  }

  export type course_of_studyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"course_name" | "faculty_name", ExtArgs["result"]["course_of_study"]>
  export type course_of_studyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | facultyDefaultArgs<ExtArgs>
    student_student_course_of_studyTocourse_of_study?: boolean | course_of_study$student_student_course_of_studyTocourse_of_studyArgs<ExtArgs>
    _count?: boolean | Course_of_studyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type course_of_studyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | facultyDefaultArgs<ExtArgs>
  }
  export type course_of_studyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | facultyDefaultArgs<ExtArgs>
  }

  export type $course_of_studyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "course_of_study"
    objects: {
      faculty: Prisma.$facultyPayload<ExtArgs>
      student_student_course_of_studyTocourse_of_study: Prisma.$studentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      course_name: string
      faculty_name: string
    }, ExtArgs["result"]["course_of_study"]>
    composites: {}
  }

  type course_of_studyGetPayload<S extends boolean | null | undefined | course_of_studyDefaultArgs> = $Result.GetResult<Prisma.$course_of_studyPayload, S>

  type course_of_studyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<course_of_studyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Course_of_studyCountAggregateInputType | true
    }

  export interface course_of_studyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course_of_study'], meta: { name: 'course_of_study' } }
    /**
     * Find zero or one Course_of_study that matches the filter.
     * @param {course_of_studyFindUniqueArgs} args - Arguments to find a Course_of_study
     * @example
     * // Get one Course_of_study
     * const course_of_study = await prisma.course_of_study.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends course_of_studyFindUniqueArgs>(args: SelectSubset<T, course_of_studyFindUniqueArgs<ExtArgs>>): Prisma__course_of_studyClient<$Result.GetResult<Prisma.$course_of_studyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course_of_study that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {course_of_studyFindUniqueOrThrowArgs} args - Arguments to find a Course_of_study
     * @example
     * // Get one Course_of_study
     * const course_of_study = await prisma.course_of_study.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends course_of_studyFindUniqueOrThrowArgs>(args: SelectSubset<T, course_of_studyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__course_of_studyClient<$Result.GetResult<Prisma.$course_of_studyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_of_study that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_of_studyFindFirstArgs} args - Arguments to find a Course_of_study
     * @example
     * // Get one Course_of_study
     * const course_of_study = await prisma.course_of_study.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends course_of_studyFindFirstArgs>(args?: SelectSubset<T, course_of_studyFindFirstArgs<ExtArgs>>): Prisma__course_of_studyClient<$Result.GetResult<Prisma.$course_of_studyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course_of_study that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_of_studyFindFirstOrThrowArgs} args - Arguments to find a Course_of_study
     * @example
     * // Get one Course_of_study
     * const course_of_study = await prisma.course_of_study.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends course_of_studyFindFirstOrThrowArgs>(args?: SelectSubset<T, course_of_studyFindFirstOrThrowArgs<ExtArgs>>): Prisma__course_of_studyClient<$Result.GetResult<Prisma.$course_of_studyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Course_of_studies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_of_studyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Course_of_studies
     * const course_of_studies = await prisma.course_of_study.findMany()
     * 
     * // Get first 10 Course_of_studies
     * const course_of_studies = await prisma.course_of_study.findMany({ take: 10 })
     * 
     * // Only select the `course_name`
     * const course_of_studyWithCourse_nameOnly = await prisma.course_of_study.findMany({ select: { course_name: true } })
     * 
     */
    findMany<T extends course_of_studyFindManyArgs>(args?: SelectSubset<T, course_of_studyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_of_studyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course_of_study.
     * @param {course_of_studyCreateArgs} args - Arguments to create a Course_of_study.
     * @example
     * // Create one Course_of_study
     * const Course_of_study = await prisma.course_of_study.create({
     *   data: {
     *     // ... data to create a Course_of_study
     *   }
     * })
     * 
     */
    create<T extends course_of_studyCreateArgs>(args: SelectSubset<T, course_of_studyCreateArgs<ExtArgs>>): Prisma__course_of_studyClient<$Result.GetResult<Prisma.$course_of_studyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Course_of_studies.
     * @param {course_of_studyCreateManyArgs} args - Arguments to create many Course_of_studies.
     * @example
     * // Create many Course_of_studies
     * const course_of_study = await prisma.course_of_study.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends course_of_studyCreateManyArgs>(args?: SelectSubset<T, course_of_studyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Course_of_studies and returns the data saved in the database.
     * @param {course_of_studyCreateManyAndReturnArgs} args - Arguments to create many Course_of_studies.
     * @example
     * // Create many Course_of_studies
     * const course_of_study = await prisma.course_of_study.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Course_of_studies and only return the `course_name`
     * const course_of_studyWithCourse_nameOnly = await prisma.course_of_study.createManyAndReturn({
     *   select: { course_name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends course_of_studyCreateManyAndReturnArgs>(args?: SelectSubset<T, course_of_studyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_of_studyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course_of_study.
     * @param {course_of_studyDeleteArgs} args - Arguments to delete one Course_of_study.
     * @example
     * // Delete one Course_of_study
     * const Course_of_study = await prisma.course_of_study.delete({
     *   where: {
     *     // ... filter to delete one Course_of_study
     *   }
     * })
     * 
     */
    delete<T extends course_of_studyDeleteArgs>(args: SelectSubset<T, course_of_studyDeleteArgs<ExtArgs>>): Prisma__course_of_studyClient<$Result.GetResult<Prisma.$course_of_studyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course_of_study.
     * @param {course_of_studyUpdateArgs} args - Arguments to update one Course_of_study.
     * @example
     * // Update one Course_of_study
     * const course_of_study = await prisma.course_of_study.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends course_of_studyUpdateArgs>(args: SelectSubset<T, course_of_studyUpdateArgs<ExtArgs>>): Prisma__course_of_studyClient<$Result.GetResult<Prisma.$course_of_studyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Course_of_studies.
     * @param {course_of_studyDeleteManyArgs} args - Arguments to filter Course_of_studies to delete.
     * @example
     * // Delete a few Course_of_studies
     * const { count } = await prisma.course_of_study.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends course_of_studyDeleteManyArgs>(args?: SelectSubset<T, course_of_studyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_of_studies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_of_studyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Course_of_studies
     * const course_of_study = await prisma.course_of_study.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends course_of_studyUpdateManyArgs>(args: SelectSubset<T, course_of_studyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Course_of_studies and returns the data updated in the database.
     * @param {course_of_studyUpdateManyAndReturnArgs} args - Arguments to update many Course_of_studies.
     * @example
     * // Update many Course_of_studies
     * const course_of_study = await prisma.course_of_study.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Course_of_studies and only return the `course_name`
     * const course_of_studyWithCourse_nameOnly = await prisma.course_of_study.updateManyAndReturn({
     *   select: { course_name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends course_of_studyUpdateManyAndReturnArgs>(args: SelectSubset<T, course_of_studyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_of_studyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course_of_study.
     * @param {course_of_studyUpsertArgs} args - Arguments to update or create a Course_of_study.
     * @example
     * // Update or create a Course_of_study
     * const course_of_study = await prisma.course_of_study.upsert({
     *   create: {
     *     // ... data to create a Course_of_study
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course_of_study we want to update
     *   }
     * })
     */
    upsert<T extends course_of_studyUpsertArgs>(args: SelectSubset<T, course_of_studyUpsertArgs<ExtArgs>>): Prisma__course_of_studyClient<$Result.GetResult<Prisma.$course_of_studyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Course_of_studies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_of_studyCountArgs} args - Arguments to filter Course_of_studies to count.
     * @example
     * // Count the number of Course_of_studies
     * const count = await prisma.course_of_study.count({
     *   where: {
     *     // ... the filter for the Course_of_studies we want to count
     *   }
     * })
    **/
    count<T extends course_of_studyCountArgs>(
      args?: Subset<T, course_of_studyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Course_of_studyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course_of_study.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Course_of_studyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Course_of_studyAggregateArgs>(args: Subset<T, Course_of_studyAggregateArgs>): Prisma.PrismaPromise<GetCourse_of_studyAggregateType<T>>

    /**
     * Group by Course_of_study.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {course_of_studyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends course_of_studyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: course_of_studyGroupByArgs['orderBy'] }
        : { orderBy?: course_of_studyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, course_of_studyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourse_of_studyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the course_of_study model
   */
  readonly fields: course_of_studyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course_of_study.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__course_of_studyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faculty<T extends facultyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, facultyDefaultArgs<ExtArgs>>): Prisma__facultyClient<$Result.GetResult<Prisma.$facultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student_student_course_of_studyTocourse_of_study<T extends course_of_study$student_student_course_of_studyTocourse_of_studyArgs<ExtArgs> = {}>(args?: Subset<T, course_of_study$student_student_course_of_studyTocourse_of_studyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the course_of_study model
   */
  interface course_of_studyFieldRefs {
    readonly course_name: FieldRef<"course_of_study", 'String'>
    readonly faculty_name: FieldRef<"course_of_study", 'String'>
  }
    

  // Custom InputTypes
  /**
   * course_of_study findUnique
   */
  export type course_of_studyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_of_study
     */
    select?: course_of_studySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_of_study
     */
    omit?: course_of_studyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_of_studyInclude<ExtArgs> | null
    /**
     * Filter, which course_of_study to fetch.
     */
    where: course_of_studyWhereUniqueInput
  }

  /**
   * course_of_study findUniqueOrThrow
   */
  export type course_of_studyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_of_study
     */
    select?: course_of_studySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_of_study
     */
    omit?: course_of_studyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_of_studyInclude<ExtArgs> | null
    /**
     * Filter, which course_of_study to fetch.
     */
    where: course_of_studyWhereUniqueInput
  }

  /**
   * course_of_study findFirst
   */
  export type course_of_studyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_of_study
     */
    select?: course_of_studySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_of_study
     */
    omit?: course_of_studyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_of_studyInclude<ExtArgs> | null
    /**
     * Filter, which course_of_study to fetch.
     */
    where?: course_of_studyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_of_studies to fetch.
     */
    orderBy?: course_of_studyOrderByWithRelationInput | course_of_studyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_of_studies.
     */
    cursor?: course_of_studyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_of_studies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_of_studies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_of_studies.
     */
    distinct?: Course_of_studyScalarFieldEnum | Course_of_studyScalarFieldEnum[]
  }

  /**
   * course_of_study findFirstOrThrow
   */
  export type course_of_studyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_of_study
     */
    select?: course_of_studySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_of_study
     */
    omit?: course_of_studyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_of_studyInclude<ExtArgs> | null
    /**
     * Filter, which course_of_study to fetch.
     */
    where?: course_of_studyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_of_studies to fetch.
     */
    orderBy?: course_of_studyOrderByWithRelationInput | course_of_studyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for course_of_studies.
     */
    cursor?: course_of_studyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_of_studies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_of_studies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of course_of_studies.
     */
    distinct?: Course_of_studyScalarFieldEnum | Course_of_studyScalarFieldEnum[]
  }

  /**
   * course_of_study findMany
   */
  export type course_of_studyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_of_study
     */
    select?: course_of_studySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_of_study
     */
    omit?: course_of_studyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_of_studyInclude<ExtArgs> | null
    /**
     * Filter, which course_of_studies to fetch.
     */
    where?: course_of_studyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of course_of_studies to fetch.
     */
    orderBy?: course_of_studyOrderByWithRelationInput | course_of_studyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing course_of_studies.
     */
    cursor?: course_of_studyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` course_of_studies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` course_of_studies.
     */
    skip?: number
    distinct?: Course_of_studyScalarFieldEnum | Course_of_studyScalarFieldEnum[]
  }

  /**
   * course_of_study create
   */
  export type course_of_studyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_of_study
     */
    select?: course_of_studySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_of_study
     */
    omit?: course_of_studyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_of_studyInclude<ExtArgs> | null
    /**
     * The data needed to create a course_of_study.
     */
    data: XOR<course_of_studyCreateInput, course_of_studyUncheckedCreateInput>
  }

  /**
   * course_of_study createMany
   */
  export type course_of_studyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many course_of_studies.
     */
    data: course_of_studyCreateManyInput | course_of_studyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * course_of_study createManyAndReturn
   */
  export type course_of_studyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_of_study
     */
    select?: course_of_studySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_of_study
     */
    omit?: course_of_studyOmit<ExtArgs> | null
    /**
     * The data used to create many course_of_studies.
     */
    data: course_of_studyCreateManyInput | course_of_studyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_of_studyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * course_of_study update
   */
  export type course_of_studyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_of_study
     */
    select?: course_of_studySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_of_study
     */
    omit?: course_of_studyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_of_studyInclude<ExtArgs> | null
    /**
     * The data needed to update a course_of_study.
     */
    data: XOR<course_of_studyUpdateInput, course_of_studyUncheckedUpdateInput>
    /**
     * Choose, which course_of_study to update.
     */
    where: course_of_studyWhereUniqueInput
  }

  /**
   * course_of_study updateMany
   */
  export type course_of_studyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update course_of_studies.
     */
    data: XOR<course_of_studyUpdateManyMutationInput, course_of_studyUncheckedUpdateManyInput>
    /**
     * Filter which course_of_studies to update
     */
    where?: course_of_studyWhereInput
    /**
     * Limit how many course_of_studies to update.
     */
    limit?: number
  }

  /**
   * course_of_study updateManyAndReturn
   */
  export type course_of_studyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_of_study
     */
    select?: course_of_studySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the course_of_study
     */
    omit?: course_of_studyOmit<ExtArgs> | null
    /**
     * The data used to update course_of_studies.
     */
    data: XOR<course_of_studyUpdateManyMutationInput, course_of_studyUncheckedUpdateManyInput>
    /**
     * Filter which course_of_studies to update
     */
    where?: course_of_studyWhereInput
    /**
     * Limit how many course_of_studies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_of_studyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * course_of_study upsert
   */
  export type course_of_studyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_of_study
     */
    select?: course_of_studySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_of_study
     */
    omit?: course_of_studyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_of_studyInclude<ExtArgs> | null
    /**
     * The filter to search for the course_of_study to update in case it exists.
     */
    where: course_of_studyWhereUniqueInput
    /**
     * In case the course_of_study found by the `where` argument doesn't exist, create a new course_of_study with this data.
     */
    create: XOR<course_of_studyCreateInput, course_of_studyUncheckedCreateInput>
    /**
     * In case the course_of_study was found with the provided `where` argument, update it with this data.
     */
    update: XOR<course_of_studyUpdateInput, course_of_studyUncheckedUpdateInput>
  }

  /**
   * course_of_study delete
   */
  export type course_of_studyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_of_study
     */
    select?: course_of_studySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_of_study
     */
    omit?: course_of_studyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_of_studyInclude<ExtArgs> | null
    /**
     * Filter which course_of_study to delete.
     */
    where: course_of_studyWhereUniqueInput
  }

  /**
   * course_of_study deleteMany
   */
  export type course_of_studyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course_of_studies to delete
     */
    where?: course_of_studyWhereInput
    /**
     * Limit how many course_of_studies to delete.
     */
    limit?: number
  }

  /**
   * course_of_study.student_student_course_of_studyTocourse_of_study
   */
  export type course_of_study$student_student_course_of_studyTocourse_of_studyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    where?: studentWhereInput
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    cursor?: studentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * course_of_study without action
   */
  export type course_of_studyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_of_study
     */
    select?: course_of_studySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_of_study
     */
    omit?: course_of_studyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_of_studyInclude<ExtArgs> | null
  }


  /**
   * Model faculty
   */

  export type AggregateFaculty = {
    _count: FacultyCountAggregateOutputType | null
    _min: FacultyMinAggregateOutputType | null
    _max: FacultyMaxAggregateOutputType | null
  }

  export type FacultyMinAggregateOutputType = {
    faculty_name: string | null
  }

  export type FacultyMaxAggregateOutputType = {
    faculty_name: string | null
  }

  export type FacultyCountAggregateOutputType = {
    faculty_name: number
    _all: number
  }


  export type FacultyMinAggregateInputType = {
    faculty_name?: true
  }

  export type FacultyMaxAggregateInputType = {
    faculty_name?: true
  }

  export type FacultyCountAggregateInputType = {
    faculty_name?: true
    _all?: true
  }

  export type FacultyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which faculty to aggregate.
     */
    where?: facultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faculties to fetch.
     */
    orderBy?: facultyOrderByWithRelationInput | facultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: facultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned faculties
    **/
    _count?: true | FacultyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FacultyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FacultyMaxAggregateInputType
  }

  export type GetFacultyAggregateType<T extends FacultyAggregateArgs> = {
        [P in keyof T & keyof AggregateFaculty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaculty[P]>
      : GetScalarType<T[P], AggregateFaculty[P]>
  }




  export type facultyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: facultyWhereInput
    orderBy?: facultyOrderByWithAggregationInput | facultyOrderByWithAggregationInput[]
    by: FacultyScalarFieldEnum[] | FacultyScalarFieldEnum
    having?: facultyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FacultyCountAggregateInputType | true
    _min?: FacultyMinAggregateInputType
    _max?: FacultyMaxAggregateInputType
  }

  export type FacultyGroupByOutputType = {
    faculty_name: string
    _count: FacultyCountAggregateOutputType | null
    _min: FacultyMinAggregateOutputType | null
    _max: FacultyMaxAggregateOutputType | null
  }

  type GetFacultyGroupByPayload<T extends facultyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FacultyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FacultyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FacultyGroupByOutputType[P]>
            : GetScalarType<T[P], FacultyGroupByOutputType[P]>
        }
      >
    >


  export type facultySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    faculty_name?: boolean
    course_of_study?: boolean | faculty$course_of_studyArgs<ExtArgs>
    user_parent?: boolean | faculty$user_parentArgs<ExtArgs>
    _count?: boolean | FacultyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["faculty"]>

  export type facultySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    faculty_name?: boolean
  }, ExtArgs["result"]["faculty"]>

  export type facultySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    faculty_name?: boolean
  }, ExtArgs["result"]["faculty"]>

  export type facultySelectScalar = {
    faculty_name?: boolean
  }

  export type facultyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"faculty_name", ExtArgs["result"]["faculty"]>
  export type facultyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course_of_study?: boolean | faculty$course_of_studyArgs<ExtArgs>
    user_parent?: boolean | faculty$user_parentArgs<ExtArgs>
    _count?: boolean | FacultyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type facultyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type facultyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $facultyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "faculty"
    objects: {
      course_of_study: Prisma.$course_of_studyPayload<ExtArgs>[]
      user_parent: Prisma.$user_parentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      faculty_name: string
    }, ExtArgs["result"]["faculty"]>
    composites: {}
  }

  type facultyGetPayload<S extends boolean | null | undefined | facultyDefaultArgs> = $Result.GetResult<Prisma.$facultyPayload, S>

  type facultyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<facultyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FacultyCountAggregateInputType | true
    }

  export interface facultyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['faculty'], meta: { name: 'faculty' } }
    /**
     * Find zero or one Faculty that matches the filter.
     * @param {facultyFindUniqueArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends facultyFindUniqueArgs>(args: SelectSubset<T, facultyFindUniqueArgs<ExtArgs>>): Prisma__facultyClient<$Result.GetResult<Prisma.$facultyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Faculty that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {facultyFindUniqueOrThrowArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends facultyFindUniqueOrThrowArgs>(args: SelectSubset<T, facultyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__facultyClient<$Result.GetResult<Prisma.$facultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faculty that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facultyFindFirstArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends facultyFindFirstArgs>(args?: SelectSubset<T, facultyFindFirstArgs<ExtArgs>>): Prisma__facultyClient<$Result.GetResult<Prisma.$facultyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faculty that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facultyFindFirstOrThrowArgs} args - Arguments to find a Faculty
     * @example
     * // Get one Faculty
     * const faculty = await prisma.faculty.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends facultyFindFirstOrThrowArgs>(args?: SelectSubset<T, facultyFindFirstOrThrowArgs<ExtArgs>>): Prisma__facultyClient<$Result.GetResult<Prisma.$facultyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faculties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facultyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faculties
     * const faculties = await prisma.faculty.findMany()
     * 
     * // Get first 10 Faculties
     * const faculties = await prisma.faculty.findMany({ take: 10 })
     * 
     * // Only select the `faculty_name`
     * const facultyWithFaculty_nameOnly = await prisma.faculty.findMany({ select: { faculty_name: true } })
     * 
     */
    findMany<T extends facultyFindManyArgs>(args?: SelectSubset<T, facultyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facultyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Faculty.
     * @param {facultyCreateArgs} args - Arguments to create a Faculty.
     * @example
     * // Create one Faculty
     * const Faculty = await prisma.faculty.create({
     *   data: {
     *     // ... data to create a Faculty
     *   }
     * })
     * 
     */
    create<T extends facultyCreateArgs>(args: SelectSubset<T, facultyCreateArgs<ExtArgs>>): Prisma__facultyClient<$Result.GetResult<Prisma.$facultyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faculties.
     * @param {facultyCreateManyArgs} args - Arguments to create many Faculties.
     * @example
     * // Create many Faculties
     * const faculty = await prisma.faculty.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends facultyCreateManyArgs>(args?: SelectSubset<T, facultyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Faculties and returns the data saved in the database.
     * @param {facultyCreateManyAndReturnArgs} args - Arguments to create many Faculties.
     * @example
     * // Create many Faculties
     * const faculty = await prisma.faculty.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Faculties and only return the `faculty_name`
     * const facultyWithFaculty_nameOnly = await prisma.faculty.createManyAndReturn({
     *   select: { faculty_name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends facultyCreateManyAndReturnArgs>(args?: SelectSubset<T, facultyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facultyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Faculty.
     * @param {facultyDeleteArgs} args - Arguments to delete one Faculty.
     * @example
     * // Delete one Faculty
     * const Faculty = await prisma.faculty.delete({
     *   where: {
     *     // ... filter to delete one Faculty
     *   }
     * })
     * 
     */
    delete<T extends facultyDeleteArgs>(args: SelectSubset<T, facultyDeleteArgs<ExtArgs>>): Prisma__facultyClient<$Result.GetResult<Prisma.$facultyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Faculty.
     * @param {facultyUpdateArgs} args - Arguments to update one Faculty.
     * @example
     * // Update one Faculty
     * const faculty = await prisma.faculty.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends facultyUpdateArgs>(args: SelectSubset<T, facultyUpdateArgs<ExtArgs>>): Prisma__facultyClient<$Result.GetResult<Prisma.$facultyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faculties.
     * @param {facultyDeleteManyArgs} args - Arguments to filter Faculties to delete.
     * @example
     * // Delete a few Faculties
     * const { count } = await prisma.faculty.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends facultyDeleteManyArgs>(args?: SelectSubset<T, facultyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faculties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facultyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faculties
     * const faculty = await prisma.faculty.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends facultyUpdateManyArgs>(args: SelectSubset<T, facultyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faculties and returns the data updated in the database.
     * @param {facultyUpdateManyAndReturnArgs} args - Arguments to update many Faculties.
     * @example
     * // Update many Faculties
     * const faculty = await prisma.faculty.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Faculties and only return the `faculty_name`
     * const facultyWithFaculty_nameOnly = await prisma.faculty.updateManyAndReturn({
     *   select: { faculty_name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends facultyUpdateManyAndReturnArgs>(args: SelectSubset<T, facultyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$facultyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Faculty.
     * @param {facultyUpsertArgs} args - Arguments to update or create a Faculty.
     * @example
     * // Update or create a Faculty
     * const faculty = await prisma.faculty.upsert({
     *   create: {
     *     // ... data to create a Faculty
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faculty we want to update
     *   }
     * })
     */
    upsert<T extends facultyUpsertArgs>(args: SelectSubset<T, facultyUpsertArgs<ExtArgs>>): Prisma__facultyClient<$Result.GetResult<Prisma.$facultyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faculties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facultyCountArgs} args - Arguments to filter Faculties to count.
     * @example
     * // Count the number of Faculties
     * const count = await prisma.faculty.count({
     *   where: {
     *     // ... the filter for the Faculties we want to count
     *   }
     * })
    **/
    count<T extends facultyCountArgs>(
      args?: Subset<T, facultyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FacultyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faculty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FacultyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FacultyAggregateArgs>(args: Subset<T, FacultyAggregateArgs>): Prisma.PrismaPromise<GetFacultyAggregateType<T>>

    /**
     * Group by Faculty.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {facultyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends facultyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: facultyGroupByArgs['orderBy'] }
        : { orderBy?: facultyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, facultyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the faculty model
   */
  readonly fields: facultyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for faculty.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__facultyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course_of_study<T extends faculty$course_of_studyArgs<ExtArgs> = {}>(args?: Subset<T, faculty$course_of_studyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$course_of_studyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user_parent<T extends faculty$user_parentArgs<ExtArgs> = {}>(args?: Subset<T, faculty$user_parentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_parentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the faculty model
   */
  interface facultyFieldRefs {
    readonly faculty_name: FieldRef<"faculty", 'String'>
  }
    

  // Custom InputTypes
  /**
   * faculty findUnique
   */
  export type facultyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculty
     */
    select?: facultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculty
     */
    omit?: facultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facultyInclude<ExtArgs> | null
    /**
     * Filter, which faculty to fetch.
     */
    where: facultyWhereUniqueInput
  }

  /**
   * faculty findUniqueOrThrow
   */
  export type facultyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculty
     */
    select?: facultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculty
     */
    omit?: facultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facultyInclude<ExtArgs> | null
    /**
     * Filter, which faculty to fetch.
     */
    where: facultyWhereUniqueInput
  }

  /**
   * faculty findFirst
   */
  export type facultyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculty
     */
    select?: facultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculty
     */
    omit?: facultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facultyInclude<ExtArgs> | null
    /**
     * Filter, which faculty to fetch.
     */
    where?: facultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faculties to fetch.
     */
    orderBy?: facultyOrderByWithRelationInput | facultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for faculties.
     */
    cursor?: facultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of faculties.
     */
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }

  /**
   * faculty findFirstOrThrow
   */
  export type facultyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculty
     */
    select?: facultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculty
     */
    omit?: facultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facultyInclude<ExtArgs> | null
    /**
     * Filter, which faculty to fetch.
     */
    where?: facultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faculties to fetch.
     */
    orderBy?: facultyOrderByWithRelationInput | facultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for faculties.
     */
    cursor?: facultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faculties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of faculties.
     */
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }

  /**
   * faculty findMany
   */
  export type facultyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculty
     */
    select?: facultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculty
     */
    omit?: facultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facultyInclude<ExtArgs> | null
    /**
     * Filter, which faculties to fetch.
     */
    where?: facultyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of faculties to fetch.
     */
    orderBy?: facultyOrderByWithRelationInput | facultyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing faculties.
     */
    cursor?: facultyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` faculties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` faculties.
     */
    skip?: number
    distinct?: FacultyScalarFieldEnum | FacultyScalarFieldEnum[]
  }

  /**
   * faculty create
   */
  export type facultyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculty
     */
    select?: facultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculty
     */
    omit?: facultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facultyInclude<ExtArgs> | null
    /**
     * The data needed to create a faculty.
     */
    data: XOR<facultyCreateInput, facultyUncheckedCreateInput>
  }

  /**
   * faculty createMany
   */
  export type facultyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many faculties.
     */
    data: facultyCreateManyInput | facultyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * faculty createManyAndReturn
   */
  export type facultyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculty
     */
    select?: facultySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the faculty
     */
    omit?: facultyOmit<ExtArgs> | null
    /**
     * The data used to create many faculties.
     */
    data: facultyCreateManyInput | facultyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * faculty update
   */
  export type facultyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculty
     */
    select?: facultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculty
     */
    omit?: facultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facultyInclude<ExtArgs> | null
    /**
     * The data needed to update a faculty.
     */
    data: XOR<facultyUpdateInput, facultyUncheckedUpdateInput>
    /**
     * Choose, which faculty to update.
     */
    where: facultyWhereUniqueInput
  }

  /**
   * faculty updateMany
   */
  export type facultyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update faculties.
     */
    data: XOR<facultyUpdateManyMutationInput, facultyUncheckedUpdateManyInput>
    /**
     * Filter which faculties to update
     */
    where?: facultyWhereInput
    /**
     * Limit how many faculties to update.
     */
    limit?: number
  }

  /**
   * faculty updateManyAndReturn
   */
  export type facultyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculty
     */
    select?: facultySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the faculty
     */
    omit?: facultyOmit<ExtArgs> | null
    /**
     * The data used to update faculties.
     */
    data: XOR<facultyUpdateManyMutationInput, facultyUncheckedUpdateManyInput>
    /**
     * Filter which faculties to update
     */
    where?: facultyWhereInput
    /**
     * Limit how many faculties to update.
     */
    limit?: number
  }

  /**
   * faculty upsert
   */
  export type facultyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculty
     */
    select?: facultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculty
     */
    omit?: facultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facultyInclude<ExtArgs> | null
    /**
     * The filter to search for the faculty to update in case it exists.
     */
    where: facultyWhereUniqueInput
    /**
     * In case the faculty found by the `where` argument doesn't exist, create a new faculty with this data.
     */
    create: XOR<facultyCreateInput, facultyUncheckedCreateInput>
    /**
     * In case the faculty was found with the provided `where` argument, update it with this data.
     */
    update: XOR<facultyUpdateInput, facultyUncheckedUpdateInput>
  }

  /**
   * faculty delete
   */
  export type facultyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculty
     */
    select?: facultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculty
     */
    omit?: facultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facultyInclude<ExtArgs> | null
    /**
     * Filter which faculty to delete.
     */
    where: facultyWhereUniqueInput
  }

  /**
   * faculty deleteMany
   */
  export type facultyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which faculties to delete
     */
    where?: facultyWhereInput
    /**
     * Limit how many faculties to delete.
     */
    limit?: number
  }

  /**
   * faculty.course_of_study
   */
  export type faculty$course_of_studyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course_of_study
     */
    select?: course_of_studySelect<ExtArgs> | null
    /**
     * Omit specific fields from the course_of_study
     */
    omit?: course_of_studyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: course_of_studyInclude<ExtArgs> | null
    where?: course_of_studyWhereInput
    orderBy?: course_of_studyOrderByWithRelationInput | course_of_studyOrderByWithRelationInput[]
    cursor?: course_of_studyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Course_of_studyScalarFieldEnum | Course_of_studyScalarFieldEnum[]
  }

  /**
   * faculty.user_parent
   */
  export type faculty$user_parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_parent
     */
    select?: user_parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_parent
     */
    omit?: user_parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_parentInclude<ExtArgs> | null
    where?: user_parentWhereInput
    orderBy?: user_parentOrderByWithRelationInput | user_parentOrderByWithRelationInput[]
    cursor?: user_parentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: User_parentScalarFieldEnum | User_parentScalarFieldEnum[]
  }

  /**
   * faculty without action
   */
  export type facultyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the faculty
     */
    select?: facultySelect<ExtArgs> | null
    /**
     * Omit specific fields from the faculty
     */
    omit?: facultyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: facultyInclude<ExtArgs> | null
  }


  /**
   * Model student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    student_id: number | null
  }

  export type StudentSumAggregateOutputType = {
    student_id: number | null
  }

  export type StudentMinAggregateOutputType = {
    student_id: number | null
    course_of_study: string | null
  }

  export type StudentMaxAggregateOutputType = {
    student_id: number | null
    course_of_study: string | null
  }

  export type StudentCountAggregateOutputType = {
    student_id: number
    course_of_study: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    student_id?: true
  }

  export type StudentSumAggregateInputType = {
    student_id?: true
  }

  export type StudentMinAggregateInputType = {
    student_id?: true
    course_of_study?: true
  }

  export type StudentMaxAggregateInputType = {
    student_id?: true
    course_of_study?: true
  }

  export type StudentCountAggregateInputType = {
    student_id?: true
    course_of_study?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student to aggregate.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type studentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput
    orderBy?: studentOrderByWithAggregationInput | studentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: studentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    student_id: number
    course_of_study: string
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends studentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type studentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    course_of_study?: boolean
    user_parent?: boolean | user_parentDefaultArgs<ExtArgs>
    course_of_study_student_course_of_studyTocourse_of_study?: boolean | course_of_studyDefaultArgs<ExtArgs>
    student_tag?: boolean | student$student_tagArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type studentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    course_of_study?: boolean
    user_parent?: boolean | user_parentDefaultArgs<ExtArgs>
    course_of_study_student_course_of_studyTocourse_of_study?: boolean | course_of_studyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type studentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    course_of_study?: boolean
    user_parent?: boolean | user_parentDefaultArgs<ExtArgs>
    course_of_study_student_course_of_studyTocourse_of_study?: boolean | course_of_studyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type studentSelectScalar = {
    student_id?: boolean
    course_of_study?: boolean
  }

  export type studentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"student_id" | "course_of_study", ExtArgs["result"]["student"]>
  export type studentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_parent?: boolean | user_parentDefaultArgs<ExtArgs>
    course_of_study_student_course_of_studyTocourse_of_study?: boolean | course_of_studyDefaultArgs<ExtArgs>
    student_tag?: boolean | student$student_tagArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type studentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_parent?: boolean | user_parentDefaultArgs<ExtArgs>
    course_of_study_student_course_of_studyTocourse_of_study?: boolean | course_of_studyDefaultArgs<ExtArgs>
  }
  export type studentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_parent?: boolean | user_parentDefaultArgs<ExtArgs>
    course_of_study_student_course_of_studyTocourse_of_study?: boolean | course_of_studyDefaultArgs<ExtArgs>
  }

  export type $studentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student"
    objects: {
      user_parent: Prisma.$user_parentPayload<ExtArgs>
      course_of_study_student_course_of_studyTocourse_of_study: Prisma.$course_of_studyPayload<ExtArgs>
      student_tag: Prisma.$student_tagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      student_id: number
      course_of_study: string
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type studentGetPayload<S extends boolean | null | undefined | studentDefaultArgs> = $Result.GetResult<Prisma.$studentPayload, S>

  type studentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<studentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface studentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student'], meta: { name: 'student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {studentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends studentFindUniqueArgs>(args: SelectSubset<T, studentFindUniqueArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {studentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends studentFindUniqueOrThrowArgs>(args: SelectSubset<T, studentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends studentFindFirstArgs>(args?: SelectSubset<T, studentFindFirstArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends studentFindFirstOrThrowArgs>(args?: SelectSubset<T, studentFindFirstOrThrowArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `student_id`
     * const studentWithStudent_idOnly = await prisma.student.findMany({ select: { student_id: true } })
     * 
     */
    findMany<T extends studentFindManyArgs>(args?: SelectSubset<T, studentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {studentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends studentCreateArgs>(args: SelectSubset<T, studentCreateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {studentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends studentCreateManyArgs>(args?: SelectSubset<T, studentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {studentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `student_id`
     * const studentWithStudent_idOnly = await prisma.student.createManyAndReturn({
     *   select: { student_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends studentCreateManyAndReturnArgs>(args?: SelectSubset<T, studentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {studentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends studentDeleteArgs>(args: SelectSubset<T, studentDeleteArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {studentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends studentUpdateArgs>(args: SelectSubset<T, studentUpdateArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {studentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends studentDeleteManyArgs>(args?: SelectSubset<T, studentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends studentUpdateManyArgs>(args: SelectSubset<T, studentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {studentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `student_id`
     * const studentWithStudent_idOnly = await prisma.student.updateManyAndReturn({
     *   select: { student_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends studentUpdateManyAndReturnArgs>(args: SelectSubset<T, studentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {studentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends studentUpsertArgs>(args: SelectSubset<T, studentUpsertArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends studentCountArgs>(
      args?: Subset<T, studentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends studentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentGroupByArgs['orderBy'] }
        : { orderBy?: studentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, studentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student model
   */
  readonly fields: studentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_parent<T extends user_parentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_parentDefaultArgs<ExtArgs>>): Prisma__user_parentClient<$Result.GetResult<Prisma.$user_parentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course_of_study_student_course_of_studyTocourse_of_study<T extends course_of_studyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, course_of_studyDefaultArgs<ExtArgs>>): Prisma__course_of_studyClient<$Result.GetResult<Prisma.$course_of_studyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student_tag<T extends student$student_tagArgs<ExtArgs> = {}>(args?: Subset<T, student$student_tagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the student model
   */
  interface studentFieldRefs {
    readonly student_id: FieldRef<"student", 'Int'>
    readonly course_of_study: FieldRef<"student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * student findUnique
   */
  export type studentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findUniqueOrThrow
   */
  export type studentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student findFirst
   */
  export type studentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findFirstOrThrow
   */
  export type studentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student findMany
   */
  export type studentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter, which students to fetch.
     */
    where?: studentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing students.
     */
    cursor?: studentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * student create
   */
  export type studentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to create a student.
     */
    data: XOR<studentCreateInput, studentUncheckedCreateInput>
  }

  /**
   * student createMany
   */
  export type studentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student createManyAndReturn
   */
  export type studentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * student update
   */
  export type studentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The data needed to update a student.
     */
    data: XOR<studentUpdateInput, studentUncheckedUpdateInput>
    /**
     * Choose, which student to update.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student updateMany
   */
  export type studentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
  }

  /**
   * student updateManyAndReturn
   */
  export type studentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>
    /**
     * Filter which students to update
     */
    where?: studentWhereInput
    /**
     * Limit how many students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * student upsert
   */
  export type studentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * The filter to search for the student to update in case it exists.
     */
    where: studentWhereUniqueInput
    /**
     * In case the student found by the `where` argument doesn't exist, create a new student with this data.
     */
    create: XOR<studentCreateInput, studentUncheckedCreateInput>
    /**
     * In case the student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentUpdateInput, studentUncheckedUpdateInput>
  }

  /**
   * student delete
   */
  export type studentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    /**
     * Filter which student to delete.
     */
    where: studentWhereUniqueInput
  }

  /**
   * student deleteMany
   */
  export type studentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentWhereInput
    /**
     * Limit how many students to delete.
     */
    limit?: number
  }

  /**
   * student.student_tag
   */
  export type student$student_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_tag
     */
    select?: student_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_tag
     */
    omit?: student_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_tagInclude<ExtArgs> | null
    where?: student_tagWhereInput
    orderBy?: student_tagOrderByWithRelationInput | student_tagOrderByWithRelationInput[]
    cursor?: student_tagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Student_tagScalarFieldEnum | Student_tagScalarFieldEnum[]
  }

  /**
   * student without action
   */
  export type studentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
  }


  /**
   * Model student_tag
   */

  export type AggregateStudent_tag = {
    _count: Student_tagCountAggregateOutputType | null
    _avg: Student_tagAvgAggregateOutputType | null
    _sum: Student_tagSumAggregateOutputType | null
    _min: Student_tagMinAggregateOutputType | null
    _max: Student_tagMaxAggregateOutputType | null
  }

  export type Student_tagAvgAggregateOutputType = {
    student_id: number | null
  }

  export type Student_tagSumAggregateOutputType = {
    student_id: number | null
  }

  export type Student_tagMinAggregateOutputType = {
    tag_name: string | null
    student_id: number | null
  }

  export type Student_tagMaxAggregateOutputType = {
    tag_name: string | null
    student_id: number | null
  }

  export type Student_tagCountAggregateOutputType = {
    tag_name: number
    student_id: number
    _all: number
  }


  export type Student_tagAvgAggregateInputType = {
    student_id?: true
  }

  export type Student_tagSumAggregateInputType = {
    student_id?: true
  }

  export type Student_tagMinAggregateInputType = {
    tag_name?: true
    student_id?: true
  }

  export type Student_tagMaxAggregateInputType = {
    tag_name?: true
    student_id?: true
  }

  export type Student_tagCountAggregateInputType = {
    tag_name?: true
    student_id?: true
    _all?: true
  }

  export type Student_tagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student_tag to aggregate.
     */
    where?: student_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_tags to fetch.
     */
    orderBy?: student_tagOrderByWithRelationInput | student_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: student_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned student_tags
    **/
    _count?: true | Student_tagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Student_tagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Student_tagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Student_tagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Student_tagMaxAggregateInputType
  }

  export type GetStudent_tagAggregateType<T extends Student_tagAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent_tag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent_tag[P]>
      : GetScalarType<T[P], AggregateStudent_tag[P]>
  }




  export type student_tagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: student_tagWhereInput
    orderBy?: student_tagOrderByWithAggregationInput | student_tagOrderByWithAggregationInput[]
    by: Student_tagScalarFieldEnum[] | Student_tagScalarFieldEnum
    having?: student_tagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Student_tagCountAggregateInputType | true
    _avg?: Student_tagAvgAggregateInputType
    _sum?: Student_tagSumAggregateInputType
    _min?: Student_tagMinAggregateInputType
    _max?: Student_tagMaxAggregateInputType
  }

  export type Student_tagGroupByOutputType = {
    tag_name: string
    student_id: number
    _count: Student_tagCountAggregateOutputType | null
    _avg: Student_tagAvgAggregateOutputType | null
    _sum: Student_tagSumAggregateOutputType | null
    _min: Student_tagMinAggregateOutputType | null
    _max: Student_tagMaxAggregateOutputType | null
  }

  type GetStudent_tagGroupByPayload<T extends student_tagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Student_tagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Student_tagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Student_tagGroupByOutputType[P]>
            : GetScalarType<T[P], Student_tagGroupByOutputType[P]>
        }
      >
    >


  export type student_tagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_name?: boolean
    student_id?: boolean
    tag?: boolean | tagDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_tag"]>

  export type student_tagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_name?: boolean
    student_id?: boolean
    tag?: boolean | tagDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_tag"]>

  export type student_tagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_name?: boolean
    student_id?: boolean
    tag?: boolean | tagDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student_tag"]>

  export type student_tagSelectScalar = {
    tag_name?: boolean
    student_id?: boolean
  }

  export type student_tagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tag_name" | "student_id", ExtArgs["result"]["student_tag"]>
  export type student_tagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | tagDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }
  export type student_tagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | tagDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }
  export type student_tagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | tagDefaultArgs<ExtArgs>
    student?: boolean | studentDefaultArgs<ExtArgs>
  }

  export type $student_tagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "student_tag"
    objects: {
      tag: Prisma.$tagPayload<ExtArgs>
      student: Prisma.$studentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tag_name: string
      student_id: number
    }, ExtArgs["result"]["student_tag"]>
    composites: {}
  }

  type student_tagGetPayload<S extends boolean | null | undefined | student_tagDefaultArgs> = $Result.GetResult<Prisma.$student_tagPayload, S>

  type student_tagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<student_tagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Student_tagCountAggregateInputType | true
    }

  export interface student_tagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student_tag'], meta: { name: 'student_tag' } }
    /**
     * Find zero or one Student_tag that matches the filter.
     * @param {student_tagFindUniqueArgs} args - Arguments to find a Student_tag
     * @example
     * // Get one Student_tag
     * const student_tag = await prisma.student_tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends student_tagFindUniqueArgs>(args: SelectSubset<T, student_tagFindUniqueArgs<ExtArgs>>): Prisma__student_tagClient<$Result.GetResult<Prisma.$student_tagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student_tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {student_tagFindUniqueOrThrowArgs} args - Arguments to find a Student_tag
     * @example
     * // Get one Student_tag
     * const student_tag = await prisma.student_tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends student_tagFindUniqueOrThrowArgs>(args: SelectSubset<T, student_tagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__student_tagClient<$Result.GetResult<Prisma.$student_tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_tagFindFirstArgs} args - Arguments to find a Student_tag
     * @example
     * // Get one Student_tag
     * const student_tag = await prisma.student_tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends student_tagFindFirstArgs>(args?: SelectSubset<T, student_tagFindFirstArgs<ExtArgs>>): Prisma__student_tagClient<$Result.GetResult<Prisma.$student_tagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student_tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_tagFindFirstOrThrowArgs} args - Arguments to find a Student_tag
     * @example
     * // Get one Student_tag
     * const student_tag = await prisma.student_tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends student_tagFindFirstOrThrowArgs>(args?: SelectSubset<T, student_tagFindFirstOrThrowArgs<ExtArgs>>): Prisma__student_tagClient<$Result.GetResult<Prisma.$student_tagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Student_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_tagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Student_tags
     * const student_tags = await prisma.student_tag.findMany()
     * 
     * // Get first 10 Student_tags
     * const student_tags = await prisma.student_tag.findMany({ take: 10 })
     * 
     * // Only select the `tag_name`
     * const student_tagWithTag_nameOnly = await prisma.student_tag.findMany({ select: { tag_name: true } })
     * 
     */
    findMany<T extends student_tagFindManyArgs>(args?: SelectSubset<T, student_tagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student_tag.
     * @param {student_tagCreateArgs} args - Arguments to create a Student_tag.
     * @example
     * // Create one Student_tag
     * const Student_tag = await prisma.student_tag.create({
     *   data: {
     *     // ... data to create a Student_tag
     *   }
     * })
     * 
     */
    create<T extends student_tagCreateArgs>(args: SelectSubset<T, student_tagCreateArgs<ExtArgs>>): Prisma__student_tagClient<$Result.GetResult<Prisma.$student_tagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Student_tags.
     * @param {student_tagCreateManyArgs} args - Arguments to create many Student_tags.
     * @example
     * // Create many Student_tags
     * const student_tag = await prisma.student_tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends student_tagCreateManyArgs>(args?: SelectSubset<T, student_tagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Student_tags and returns the data saved in the database.
     * @param {student_tagCreateManyAndReturnArgs} args - Arguments to create many Student_tags.
     * @example
     * // Create many Student_tags
     * const student_tag = await prisma.student_tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Student_tags and only return the `tag_name`
     * const student_tagWithTag_nameOnly = await prisma.student_tag.createManyAndReturn({
     *   select: { tag_name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends student_tagCreateManyAndReturnArgs>(args?: SelectSubset<T, student_tagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_tagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student_tag.
     * @param {student_tagDeleteArgs} args - Arguments to delete one Student_tag.
     * @example
     * // Delete one Student_tag
     * const Student_tag = await prisma.student_tag.delete({
     *   where: {
     *     // ... filter to delete one Student_tag
     *   }
     * })
     * 
     */
    delete<T extends student_tagDeleteArgs>(args: SelectSubset<T, student_tagDeleteArgs<ExtArgs>>): Prisma__student_tagClient<$Result.GetResult<Prisma.$student_tagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student_tag.
     * @param {student_tagUpdateArgs} args - Arguments to update one Student_tag.
     * @example
     * // Update one Student_tag
     * const student_tag = await prisma.student_tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends student_tagUpdateArgs>(args: SelectSubset<T, student_tagUpdateArgs<ExtArgs>>): Prisma__student_tagClient<$Result.GetResult<Prisma.$student_tagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Student_tags.
     * @param {student_tagDeleteManyArgs} args - Arguments to filter Student_tags to delete.
     * @example
     * // Delete a few Student_tags
     * const { count } = await prisma.student_tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends student_tagDeleteManyArgs>(args?: SelectSubset<T, student_tagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_tagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Student_tags
     * const student_tag = await prisma.student_tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends student_tagUpdateManyArgs>(args: SelectSubset<T, student_tagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Student_tags and returns the data updated in the database.
     * @param {student_tagUpdateManyAndReturnArgs} args - Arguments to update many Student_tags.
     * @example
     * // Update many Student_tags
     * const student_tag = await prisma.student_tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Student_tags and only return the `tag_name`
     * const student_tagWithTag_nameOnly = await prisma.student_tag.updateManyAndReturn({
     *   select: { tag_name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends student_tagUpdateManyAndReturnArgs>(args: SelectSubset<T, student_tagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_tagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student_tag.
     * @param {student_tagUpsertArgs} args - Arguments to update or create a Student_tag.
     * @example
     * // Update or create a Student_tag
     * const student_tag = await prisma.student_tag.upsert({
     *   create: {
     *     // ... data to create a Student_tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student_tag we want to update
     *   }
     * })
     */
    upsert<T extends student_tagUpsertArgs>(args: SelectSubset<T, student_tagUpsertArgs<ExtArgs>>): Prisma__student_tagClient<$Result.GetResult<Prisma.$student_tagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Student_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_tagCountArgs} args - Arguments to filter Student_tags to count.
     * @example
     * // Count the number of Student_tags
     * const count = await prisma.student_tag.count({
     *   where: {
     *     // ... the filter for the Student_tags we want to count
     *   }
     * })
    **/
    count<T extends student_tagCountArgs>(
      args?: Subset<T, student_tagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Student_tagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Student_tagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Student_tagAggregateArgs>(args: Subset<T, Student_tagAggregateArgs>): Prisma.PrismaPromise<GetStudent_tagAggregateType<T>>

    /**
     * Group by Student_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {student_tagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends student_tagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: student_tagGroupByArgs['orderBy'] }
        : { orderBy?: student_tagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, student_tagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudent_tagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the student_tag model
   */
  readonly fields: student_tagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student_tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__student_tagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tag<T extends tagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagDefaultArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends studentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, studentDefaultArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the student_tag model
   */
  interface student_tagFieldRefs {
    readonly tag_name: FieldRef<"student_tag", 'String'>
    readonly student_id: FieldRef<"student_tag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * student_tag findUnique
   */
  export type student_tagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_tag
     */
    select?: student_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_tag
     */
    omit?: student_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_tagInclude<ExtArgs> | null
    /**
     * Filter, which student_tag to fetch.
     */
    where: student_tagWhereUniqueInput
  }

  /**
   * student_tag findUniqueOrThrow
   */
  export type student_tagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_tag
     */
    select?: student_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_tag
     */
    omit?: student_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_tagInclude<ExtArgs> | null
    /**
     * Filter, which student_tag to fetch.
     */
    where: student_tagWhereUniqueInput
  }

  /**
   * student_tag findFirst
   */
  export type student_tagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_tag
     */
    select?: student_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_tag
     */
    omit?: student_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_tagInclude<ExtArgs> | null
    /**
     * Filter, which student_tag to fetch.
     */
    where?: student_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_tags to fetch.
     */
    orderBy?: student_tagOrderByWithRelationInput | student_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for student_tags.
     */
    cursor?: student_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of student_tags.
     */
    distinct?: Student_tagScalarFieldEnum | Student_tagScalarFieldEnum[]
  }

  /**
   * student_tag findFirstOrThrow
   */
  export type student_tagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_tag
     */
    select?: student_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_tag
     */
    omit?: student_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_tagInclude<ExtArgs> | null
    /**
     * Filter, which student_tag to fetch.
     */
    where?: student_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_tags to fetch.
     */
    orderBy?: student_tagOrderByWithRelationInput | student_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for student_tags.
     */
    cursor?: student_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of student_tags.
     */
    distinct?: Student_tagScalarFieldEnum | Student_tagScalarFieldEnum[]
  }

  /**
   * student_tag findMany
   */
  export type student_tagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_tag
     */
    select?: student_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_tag
     */
    omit?: student_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_tagInclude<ExtArgs> | null
    /**
     * Filter, which student_tags to fetch.
     */
    where?: student_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of student_tags to fetch.
     */
    orderBy?: student_tagOrderByWithRelationInput | student_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing student_tags.
     */
    cursor?: student_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` student_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` student_tags.
     */
    skip?: number
    distinct?: Student_tagScalarFieldEnum | Student_tagScalarFieldEnum[]
  }

  /**
   * student_tag create
   */
  export type student_tagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_tag
     */
    select?: student_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_tag
     */
    omit?: student_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_tagInclude<ExtArgs> | null
    /**
     * The data needed to create a student_tag.
     */
    data: XOR<student_tagCreateInput, student_tagUncheckedCreateInput>
  }

  /**
   * student_tag createMany
   */
  export type student_tagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many student_tags.
     */
    data: student_tagCreateManyInput | student_tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * student_tag createManyAndReturn
   */
  export type student_tagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_tag
     */
    select?: student_tagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student_tag
     */
    omit?: student_tagOmit<ExtArgs> | null
    /**
     * The data used to create many student_tags.
     */
    data: student_tagCreateManyInput | student_tagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_tagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * student_tag update
   */
  export type student_tagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_tag
     */
    select?: student_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_tag
     */
    omit?: student_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_tagInclude<ExtArgs> | null
    /**
     * The data needed to update a student_tag.
     */
    data: XOR<student_tagUpdateInput, student_tagUncheckedUpdateInput>
    /**
     * Choose, which student_tag to update.
     */
    where: student_tagWhereUniqueInput
  }

  /**
   * student_tag updateMany
   */
  export type student_tagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update student_tags.
     */
    data: XOR<student_tagUpdateManyMutationInput, student_tagUncheckedUpdateManyInput>
    /**
     * Filter which student_tags to update
     */
    where?: student_tagWhereInput
    /**
     * Limit how many student_tags to update.
     */
    limit?: number
  }

  /**
   * student_tag updateManyAndReturn
   */
  export type student_tagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_tag
     */
    select?: student_tagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the student_tag
     */
    omit?: student_tagOmit<ExtArgs> | null
    /**
     * The data used to update student_tags.
     */
    data: XOR<student_tagUpdateManyMutationInput, student_tagUncheckedUpdateManyInput>
    /**
     * Filter which student_tags to update
     */
    where?: student_tagWhereInput
    /**
     * Limit how many student_tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_tagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * student_tag upsert
   */
  export type student_tagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_tag
     */
    select?: student_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_tag
     */
    omit?: student_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_tagInclude<ExtArgs> | null
    /**
     * The filter to search for the student_tag to update in case it exists.
     */
    where: student_tagWhereUniqueInput
    /**
     * In case the student_tag found by the `where` argument doesn't exist, create a new student_tag with this data.
     */
    create: XOR<student_tagCreateInput, student_tagUncheckedCreateInput>
    /**
     * In case the student_tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<student_tagUpdateInput, student_tagUncheckedUpdateInput>
  }

  /**
   * student_tag delete
   */
  export type student_tagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_tag
     */
    select?: student_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_tag
     */
    omit?: student_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_tagInclude<ExtArgs> | null
    /**
     * Filter which student_tag to delete.
     */
    where: student_tagWhereUniqueInput
  }

  /**
   * student_tag deleteMany
   */
  export type student_tagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student_tags to delete
     */
    where?: student_tagWhereInput
    /**
     * Limit how many student_tags to delete.
     */
    limit?: number
  }

  /**
   * student_tag without action
   */
  export type student_tagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_tag
     */
    select?: student_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_tag
     */
    omit?: student_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_tagInclude<ExtArgs> | null
  }


  /**
   * Model supervisor
   */

  export type AggregateSupervisor = {
    _count: SupervisorCountAggregateOutputType | null
    _avg: SupervisorAvgAggregateOutputType | null
    _sum: SupervisorSumAggregateOutputType | null
    _min: SupervisorMinAggregateOutputType | null
    _max: SupervisorMaxAggregateOutputType | null
  }

  export type SupervisorAvgAggregateOutputType = {
    supervisor_id: number | null
  }

  export type SupervisorSumAggregateOutputType = {
    supervisor_id: number | null
  }

  export type SupervisorMinAggregateOutputType = {
    supervisor_id: number | null
    vita: string | null
    way_of_working: string | null
    profile_tha: string | null
  }

  export type SupervisorMaxAggregateOutputType = {
    supervisor_id: number | null
    vita: string | null
    way_of_working: string | null
    profile_tha: string | null
  }

  export type SupervisorCountAggregateOutputType = {
    supervisor_id: number
    vita: number
    way_of_working: number
    profile_tha: number
    _all: number
  }


  export type SupervisorAvgAggregateInputType = {
    supervisor_id?: true
  }

  export type SupervisorSumAggregateInputType = {
    supervisor_id?: true
  }

  export type SupervisorMinAggregateInputType = {
    supervisor_id?: true
    vita?: true
    way_of_working?: true
    profile_tha?: true
  }

  export type SupervisorMaxAggregateInputType = {
    supervisor_id?: true
    vita?: true
    way_of_working?: true
    profile_tha?: true
  }

  export type SupervisorCountAggregateInputType = {
    supervisor_id?: true
    vita?: true
    way_of_working?: true
    profile_tha?: true
    _all?: true
  }

  export type SupervisorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supervisor to aggregate.
     */
    where?: supervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supervisors to fetch.
     */
    orderBy?: supervisorOrderByWithRelationInput | supervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: supervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supervisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned supervisors
    **/
    _count?: true | SupervisorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupervisorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupervisorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupervisorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupervisorMaxAggregateInputType
  }

  export type GetSupervisorAggregateType<T extends SupervisorAggregateArgs> = {
        [P in keyof T & keyof AggregateSupervisor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupervisor[P]>
      : GetScalarType<T[P], AggregateSupervisor[P]>
  }




  export type supervisorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supervisorWhereInput
    orderBy?: supervisorOrderByWithAggregationInput | supervisorOrderByWithAggregationInput[]
    by: SupervisorScalarFieldEnum[] | SupervisorScalarFieldEnum
    having?: supervisorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupervisorCountAggregateInputType | true
    _avg?: SupervisorAvgAggregateInputType
    _sum?: SupervisorSumAggregateInputType
    _min?: SupervisorMinAggregateInputType
    _max?: SupervisorMaxAggregateInputType
  }

  export type SupervisorGroupByOutputType = {
    supervisor_id: number
    vita: string | null
    way_of_working: string | null
    profile_tha: string | null
    _count: SupervisorCountAggregateOutputType | null
    _avg: SupervisorAvgAggregateOutputType | null
    _sum: SupervisorSumAggregateOutputType | null
    _min: SupervisorMinAggregateOutputType | null
    _max: SupervisorMaxAggregateOutputType | null
  }

  type GetSupervisorGroupByPayload<T extends supervisorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupervisorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupervisorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupervisorGroupByOutputType[P]>
            : GetScalarType<T[P], SupervisorGroupByOutputType[P]>
        }
      >
    >


  export type supervisorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    supervisor_id?: boolean
    vita?: boolean
    way_of_working?: boolean
    profile_tha?: boolean
    user_parent?: boolean | user_parentDefaultArgs<ExtArgs>
    thesis_proposal?: boolean | supervisor$thesis_proposalArgs<ExtArgs>
    _count?: boolean | SupervisorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supervisor"]>

  export type supervisorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    supervisor_id?: boolean
    vita?: boolean
    way_of_working?: boolean
    profile_tha?: boolean
    user_parent?: boolean | user_parentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supervisor"]>

  export type supervisorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    supervisor_id?: boolean
    vita?: boolean
    way_of_working?: boolean
    profile_tha?: boolean
    user_parent?: boolean | user_parentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supervisor"]>

  export type supervisorSelectScalar = {
    supervisor_id?: boolean
    vita?: boolean
    way_of_working?: boolean
    profile_tha?: boolean
  }

  export type supervisorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"supervisor_id" | "vita" | "way_of_working" | "profile_tha", ExtArgs["result"]["supervisor"]>
  export type supervisorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_parent?: boolean | user_parentDefaultArgs<ExtArgs>
    thesis_proposal?: boolean | supervisor$thesis_proposalArgs<ExtArgs>
    _count?: boolean | SupervisorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type supervisorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_parent?: boolean | user_parentDefaultArgs<ExtArgs>
  }
  export type supervisorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user_parent?: boolean | user_parentDefaultArgs<ExtArgs>
  }

  export type $supervisorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "supervisor"
    objects: {
      user_parent: Prisma.$user_parentPayload<ExtArgs>
      thesis_proposal: Prisma.$thesis_proposalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      supervisor_id: number
      vita: string | null
      way_of_working: string | null
      profile_tha: string | null
    }, ExtArgs["result"]["supervisor"]>
    composites: {}
  }

  type supervisorGetPayload<S extends boolean | null | undefined | supervisorDefaultArgs> = $Result.GetResult<Prisma.$supervisorPayload, S>

  type supervisorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<supervisorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupervisorCountAggregateInputType | true
    }

  export interface supervisorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['supervisor'], meta: { name: 'supervisor' } }
    /**
     * Find zero or one Supervisor that matches the filter.
     * @param {supervisorFindUniqueArgs} args - Arguments to find a Supervisor
     * @example
     * // Get one Supervisor
     * const supervisor = await prisma.supervisor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends supervisorFindUniqueArgs>(args: SelectSubset<T, supervisorFindUniqueArgs<ExtArgs>>): Prisma__supervisorClient<$Result.GetResult<Prisma.$supervisorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supervisor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {supervisorFindUniqueOrThrowArgs} args - Arguments to find a Supervisor
     * @example
     * // Get one Supervisor
     * const supervisor = await prisma.supervisor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends supervisorFindUniqueOrThrowArgs>(args: SelectSubset<T, supervisorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__supervisorClient<$Result.GetResult<Prisma.$supervisorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supervisor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supervisorFindFirstArgs} args - Arguments to find a Supervisor
     * @example
     * // Get one Supervisor
     * const supervisor = await prisma.supervisor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends supervisorFindFirstArgs>(args?: SelectSubset<T, supervisorFindFirstArgs<ExtArgs>>): Prisma__supervisorClient<$Result.GetResult<Prisma.$supervisorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supervisor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supervisorFindFirstOrThrowArgs} args - Arguments to find a Supervisor
     * @example
     * // Get one Supervisor
     * const supervisor = await prisma.supervisor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends supervisorFindFirstOrThrowArgs>(args?: SelectSubset<T, supervisorFindFirstOrThrowArgs<ExtArgs>>): Prisma__supervisorClient<$Result.GetResult<Prisma.$supervisorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Supervisors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supervisorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Supervisors
     * const supervisors = await prisma.supervisor.findMany()
     * 
     * // Get first 10 Supervisors
     * const supervisors = await prisma.supervisor.findMany({ take: 10 })
     * 
     * // Only select the `supervisor_id`
     * const supervisorWithSupervisor_idOnly = await prisma.supervisor.findMany({ select: { supervisor_id: true } })
     * 
     */
    findMany<T extends supervisorFindManyArgs>(args?: SelectSubset<T, supervisorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supervisorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supervisor.
     * @param {supervisorCreateArgs} args - Arguments to create a Supervisor.
     * @example
     * // Create one Supervisor
     * const Supervisor = await prisma.supervisor.create({
     *   data: {
     *     // ... data to create a Supervisor
     *   }
     * })
     * 
     */
    create<T extends supervisorCreateArgs>(args: SelectSubset<T, supervisorCreateArgs<ExtArgs>>): Prisma__supervisorClient<$Result.GetResult<Prisma.$supervisorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Supervisors.
     * @param {supervisorCreateManyArgs} args - Arguments to create many Supervisors.
     * @example
     * // Create many Supervisors
     * const supervisor = await prisma.supervisor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends supervisorCreateManyArgs>(args?: SelectSubset<T, supervisorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Supervisors and returns the data saved in the database.
     * @param {supervisorCreateManyAndReturnArgs} args - Arguments to create many Supervisors.
     * @example
     * // Create many Supervisors
     * const supervisor = await prisma.supervisor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Supervisors and only return the `supervisor_id`
     * const supervisorWithSupervisor_idOnly = await prisma.supervisor.createManyAndReturn({
     *   select: { supervisor_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends supervisorCreateManyAndReturnArgs>(args?: SelectSubset<T, supervisorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supervisorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supervisor.
     * @param {supervisorDeleteArgs} args - Arguments to delete one Supervisor.
     * @example
     * // Delete one Supervisor
     * const Supervisor = await prisma.supervisor.delete({
     *   where: {
     *     // ... filter to delete one Supervisor
     *   }
     * })
     * 
     */
    delete<T extends supervisorDeleteArgs>(args: SelectSubset<T, supervisorDeleteArgs<ExtArgs>>): Prisma__supervisorClient<$Result.GetResult<Prisma.$supervisorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supervisor.
     * @param {supervisorUpdateArgs} args - Arguments to update one Supervisor.
     * @example
     * // Update one Supervisor
     * const supervisor = await prisma.supervisor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends supervisorUpdateArgs>(args: SelectSubset<T, supervisorUpdateArgs<ExtArgs>>): Prisma__supervisorClient<$Result.GetResult<Prisma.$supervisorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Supervisors.
     * @param {supervisorDeleteManyArgs} args - Arguments to filter Supervisors to delete.
     * @example
     * // Delete a few Supervisors
     * const { count } = await prisma.supervisor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends supervisorDeleteManyArgs>(args?: SelectSubset<T, supervisorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supervisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supervisorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Supervisors
     * const supervisor = await prisma.supervisor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends supervisorUpdateManyArgs>(args: SelectSubset<T, supervisorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Supervisors and returns the data updated in the database.
     * @param {supervisorUpdateManyAndReturnArgs} args - Arguments to update many Supervisors.
     * @example
     * // Update many Supervisors
     * const supervisor = await prisma.supervisor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Supervisors and only return the `supervisor_id`
     * const supervisorWithSupervisor_idOnly = await prisma.supervisor.updateManyAndReturn({
     *   select: { supervisor_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends supervisorUpdateManyAndReturnArgs>(args: SelectSubset<T, supervisorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supervisorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supervisor.
     * @param {supervisorUpsertArgs} args - Arguments to update or create a Supervisor.
     * @example
     * // Update or create a Supervisor
     * const supervisor = await prisma.supervisor.upsert({
     *   create: {
     *     // ... data to create a Supervisor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supervisor we want to update
     *   }
     * })
     */
    upsert<T extends supervisorUpsertArgs>(args: SelectSubset<T, supervisorUpsertArgs<ExtArgs>>): Prisma__supervisorClient<$Result.GetResult<Prisma.$supervisorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Supervisors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supervisorCountArgs} args - Arguments to filter Supervisors to count.
     * @example
     * // Count the number of Supervisors
     * const count = await prisma.supervisor.count({
     *   where: {
     *     // ... the filter for the Supervisors we want to count
     *   }
     * })
    **/
    count<T extends supervisorCountArgs>(
      args?: Subset<T, supervisorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupervisorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supervisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupervisorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupervisorAggregateArgs>(args: Subset<T, SupervisorAggregateArgs>): Prisma.PrismaPromise<GetSupervisorAggregateType<T>>

    /**
     * Group by Supervisor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supervisorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends supervisorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: supervisorGroupByArgs['orderBy'] }
        : { orderBy?: supervisorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, supervisorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupervisorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the supervisor model
   */
  readonly fields: supervisorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for supervisor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__supervisorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user_parent<T extends user_parentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, user_parentDefaultArgs<ExtArgs>>): Prisma__user_parentClient<$Result.GetResult<Prisma.$user_parentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    thesis_proposal<T extends supervisor$thesis_proposalArgs<ExtArgs> = {}>(args?: Subset<T, supervisor$thesis_proposalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$thesis_proposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the supervisor model
   */
  interface supervisorFieldRefs {
    readonly supervisor_id: FieldRef<"supervisor", 'Int'>
    readonly vita: FieldRef<"supervisor", 'String'>
    readonly way_of_working: FieldRef<"supervisor", 'String'>
    readonly profile_tha: FieldRef<"supervisor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * supervisor findUnique
   */
  export type supervisorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisor
     */
    select?: supervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisor
     */
    omit?: supervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorInclude<ExtArgs> | null
    /**
     * Filter, which supervisor to fetch.
     */
    where: supervisorWhereUniqueInput
  }

  /**
   * supervisor findUniqueOrThrow
   */
  export type supervisorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisor
     */
    select?: supervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisor
     */
    omit?: supervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorInclude<ExtArgs> | null
    /**
     * Filter, which supervisor to fetch.
     */
    where: supervisorWhereUniqueInput
  }

  /**
   * supervisor findFirst
   */
  export type supervisorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisor
     */
    select?: supervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisor
     */
    omit?: supervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorInclude<ExtArgs> | null
    /**
     * Filter, which supervisor to fetch.
     */
    where?: supervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supervisors to fetch.
     */
    orderBy?: supervisorOrderByWithRelationInput | supervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for supervisors.
     */
    cursor?: supervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supervisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of supervisors.
     */
    distinct?: SupervisorScalarFieldEnum | SupervisorScalarFieldEnum[]
  }

  /**
   * supervisor findFirstOrThrow
   */
  export type supervisorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisor
     */
    select?: supervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisor
     */
    omit?: supervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorInclude<ExtArgs> | null
    /**
     * Filter, which supervisor to fetch.
     */
    where?: supervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supervisors to fetch.
     */
    orderBy?: supervisorOrderByWithRelationInput | supervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for supervisors.
     */
    cursor?: supervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supervisors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of supervisors.
     */
    distinct?: SupervisorScalarFieldEnum | SupervisorScalarFieldEnum[]
  }

  /**
   * supervisor findMany
   */
  export type supervisorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisor
     */
    select?: supervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisor
     */
    omit?: supervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorInclude<ExtArgs> | null
    /**
     * Filter, which supervisors to fetch.
     */
    where?: supervisorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of supervisors to fetch.
     */
    orderBy?: supervisorOrderByWithRelationInput | supervisorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing supervisors.
     */
    cursor?: supervisorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` supervisors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` supervisors.
     */
    skip?: number
    distinct?: SupervisorScalarFieldEnum | SupervisorScalarFieldEnum[]
  }

  /**
   * supervisor create
   */
  export type supervisorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisor
     */
    select?: supervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisor
     */
    omit?: supervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorInclude<ExtArgs> | null
    /**
     * The data needed to create a supervisor.
     */
    data: XOR<supervisorCreateInput, supervisorUncheckedCreateInput>
  }

  /**
   * supervisor createMany
   */
  export type supervisorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many supervisors.
     */
    data: supervisorCreateManyInput | supervisorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * supervisor createManyAndReturn
   */
  export type supervisorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisor
     */
    select?: supervisorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the supervisor
     */
    omit?: supervisorOmit<ExtArgs> | null
    /**
     * The data used to create many supervisors.
     */
    data: supervisorCreateManyInput | supervisorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * supervisor update
   */
  export type supervisorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisor
     */
    select?: supervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisor
     */
    omit?: supervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorInclude<ExtArgs> | null
    /**
     * The data needed to update a supervisor.
     */
    data: XOR<supervisorUpdateInput, supervisorUncheckedUpdateInput>
    /**
     * Choose, which supervisor to update.
     */
    where: supervisorWhereUniqueInput
  }

  /**
   * supervisor updateMany
   */
  export type supervisorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update supervisors.
     */
    data: XOR<supervisorUpdateManyMutationInput, supervisorUncheckedUpdateManyInput>
    /**
     * Filter which supervisors to update
     */
    where?: supervisorWhereInput
    /**
     * Limit how many supervisors to update.
     */
    limit?: number
  }

  /**
   * supervisor updateManyAndReturn
   */
  export type supervisorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisor
     */
    select?: supervisorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the supervisor
     */
    omit?: supervisorOmit<ExtArgs> | null
    /**
     * The data used to update supervisors.
     */
    data: XOR<supervisorUpdateManyMutationInput, supervisorUncheckedUpdateManyInput>
    /**
     * Filter which supervisors to update
     */
    where?: supervisorWhereInput
    /**
     * Limit how many supervisors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * supervisor upsert
   */
  export type supervisorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisor
     */
    select?: supervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisor
     */
    omit?: supervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorInclude<ExtArgs> | null
    /**
     * The filter to search for the supervisor to update in case it exists.
     */
    where: supervisorWhereUniqueInput
    /**
     * In case the supervisor found by the `where` argument doesn't exist, create a new supervisor with this data.
     */
    create: XOR<supervisorCreateInput, supervisorUncheckedCreateInput>
    /**
     * In case the supervisor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<supervisorUpdateInput, supervisorUncheckedUpdateInput>
  }

  /**
   * supervisor delete
   */
  export type supervisorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisor
     */
    select?: supervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisor
     */
    omit?: supervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorInclude<ExtArgs> | null
    /**
     * Filter which supervisor to delete.
     */
    where: supervisorWhereUniqueInput
  }

  /**
   * supervisor deleteMany
   */
  export type supervisorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supervisors to delete
     */
    where?: supervisorWhereInput
    /**
     * Limit how many supervisors to delete.
     */
    limit?: number
  }

  /**
   * supervisor.thesis_proposal
   */
  export type supervisor$thesis_proposalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal
     */
    select?: thesis_proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal
     */
    omit?: thesis_proposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposalInclude<ExtArgs> | null
    where?: thesis_proposalWhereInput
    orderBy?: thesis_proposalOrderByWithRelationInput | thesis_proposalOrderByWithRelationInput[]
    cursor?: thesis_proposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Thesis_proposalScalarFieldEnum | Thesis_proposalScalarFieldEnum[]
  }

  /**
   * supervisor without action
   */
  export type supervisorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisor
     */
    select?: supervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisor
     */
    omit?: supervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorInclude<ExtArgs> | null
  }


  /**
   * Model tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagMinAggregateOutputType = {
    tag_name: string | null
  }

  export type TagMaxAggregateOutputType = {
    tag_name: string | null
  }

  export type TagCountAggregateOutputType = {
    tag_name: number
    _all: number
  }


  export type TagMinAggregateInputType = {
    tag_name?: true
  }

  export type TagMaxAggregateInputType = {
    tag_name?: true
  }

  export type TagCountAggregateInputType = {
    tag_name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tag to aggregate.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type tagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagWhereInput
    orderBy?: tagOrderByWithAggregationInput | tagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: tagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    tag_name: string
    _count: TagCountAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends tagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type tagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_name?: boolean
    student_tag?: boolean | tag$student_tagArgs<ExtArgs>
    thesis_proposal_tag?: boolean | tag$thesis_proposal_tagArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type tagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type tagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_name?: boolean
  }, ExtArgs["result"]["tag"]>

  export type tagSelectScalar = {
    tag_name?: boolean
  }

  export type tagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tag_name", ExtArgs["result"]["tag"]>
  export type tagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student_tag?: boolean | tag$student_tagArgs<ExtArgs>
    thesis_proposal_tag?: boolean | tag$thesis_proposal_tagArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tag"
    objects: {
      student_tag: Prisma.$student_tagPayload<ExtArgs>[]
      thesis_proposal_tag: Prisma.$thesis_proposal_tagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      tag_name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type tagGetPayload<S extends boolean | null | undefined | tagDefaultArgs> = $Result.GetResult<Prisma.$tagPayload, S>

  type tagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface tagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tag'], meta: { name: 'tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {tagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagFindUniqueArgs>(args: SelectSubset<T, tagFindUniqueArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagFindUniqueOrThrowArgs>(args: SelectSubset<T, tagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagFindFirstArgs>(args?: SelectSubset<T, tagFindFirstArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagFindFirstOrThrowArgs>(args?: SelectSubset<T, tagFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `tag_name`
     * const tagWithTag_nameOnly = await prisma.tag.findMany({ select: { tag_name: true } })
     * 
     */
    findMany<T extends tagFindManyArgs>(args?: SelectSubset<T, tagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {tagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends tagCreateArgs>(args: SelectSubset<T, tagCreateArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagCreateManyArgs>(args?: SelectSubset<T, tagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {tagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `tag_name`
     * const tagWithTag_nameOnly = await prisma.tag.createManyAndReturn({
     *   select: { tag_name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tagCreateManyAndReturnArgs>(args?: SelectSubset<T, tagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {tagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends tagDeleteArgs>(args: SelectSubset<T, tagDeleteArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {tagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagUpdateArgs>(args: SelectSubset<T, tagUpdateArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagDeleteManyArgs>(args?: SelectSubset<T, tagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagUpdateManyArgs>(args: SelectSubset<T, tagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {tagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `tag_name`
     * const tagWithTag_nameOnly = await prisma.tag.updateManyAndReturn({
     *   select: { tag_name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tagUpdateManyAndReturnArgs>(args: SelectSubset<T, tagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {tagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends tagUpsertArgs>(args: SelectSubset<T, tagUpsertArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagCountArgs>(
      args?: Subset<T, tagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagGroupByArgs['orderBy'] }
        : { orderBy?: tagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tag model
   */
  readonly fields: tagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student_tag<T extends tag$student_tagArgs<ExtArgs> = {}>(args?: Subset<T, tag$student_tagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$student_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    thesis_proposal_tag<T extends tag$thesis_proposal_tagArgs<ExtArgs> = {}>(args?: Subset<T, tag$thesis_proposal_tagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$thesis_proposal_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tag model
   */
  interface tagFieldRefs {
    readonly tag_name: FieldRef<"tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tag findUnique
   */
  export type tagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag findUniqueOrThrow
   */
  export type tagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag findFirst
   */
  export type tagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag findFirstOrThrow
   */
  export type tagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag findMany
   */
  export type tagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag create
   */
  export type tagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * The data needed to create a tag.
     */
    data: XOR<tagCreateInput, tagUncheckedCreateInput>
  }

  /**
   * tag createMany
   */
  export type tagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagCreateManyInput | tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tag createManyAndReturn
   */
  export type tagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * The data used to create many tags.
     */
    data: tagCreateManyInput | tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tag update
   */
  export type tagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * The data needed to update a tag.
     */
    data: XOR<tagUpdateInput, tagUncheckedUpdateInput>
    /**
     * Choose, which tag to update.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag updateMany
   */
  export type tagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagUpdateManyMutationInput, tagUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tag updateManyAndReturn
   */
  export type tagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * The data used to update tags.
     */
    data: XOR<tagUpdateManyMutationInput, tagUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tag upsert
   */
  export type tagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * The filter to search for the tag to update in case it exists.
     */
    where: tagWhereUniqueInput
    /**
     * In case the tag found by the `where` argument doesn't exist, create a new tag with this data.
     */
    create: XOR<tagCreateInput, tagUncheckedCreateInput>
    /**
     * In case the tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagUpdateInput, tagUncheckedUpdateInput>
  }

  /**
   * tag delete
   */
  export type tagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter which tag to delete.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag deleteMany
   */
  export type tagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tag.student_tag
   */
  export type tag$student_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student_tag
     */
    select?: student_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student_tag
     */
    omit?: student_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: student_tagInclude<ExtArgs> | null
    where?: student_tagWhereInput
    orderBy?: student_tagOrderByWithRelationInput | student_tagOrderByWithRelationInput[]
    cursor?: student_tagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Student_tagScalarFieldEnum | Student_tagScalarFieldEnum[]
  }

  /**
   * tag.thesis_proposal_tag
   */
  export type tag$thesis_proposal_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal_tag
     */
    select?: thesis_proposal_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal_tag
     */
    omit?: thesis_proposal_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposal_tagInclude<ExtArgs> | null
    where?: thesis_proposal_tagWhereInput
    orderBy?: thesis_proposal_tagOrderByWithRelationInput | thesis_proposal_tagOrderByWithRelationInput[]
    cursor?: thesis_proposal_tagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Thesis_proposal_tagScalarFieldEnum | Thesis_proposal_tagScalarFieldEnum[]
  }

  /**
   * tag without action
   */
  export type tagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
  }


  /**
   * Model thesis_proposal
   */

  export type AggregateThesis_proposal = {
    _count: Thesis_proposalCountAggregateOutputType | null
    _avg: Thesis_proposalAvgAggregateOutputType | null
    _sum: Thesis_proposalSumAggregateOutputType | null
    _min: Thesis_proposalMinAggregateOutputType | null
    _max: Thesis_proposalMaxAggregateOutputType | null
  }

  export type Thesis_proposalAvgAggregateOutputType = {
    thesis_id: number | null
    supervisor_id: number | null
  }

  export type Thesis_proposalSumAggregateOutputType = {
    thesis_id: number | null
    supervisor_id: number | null
  }

  export type Thesis_proposalMinAggregateOutputType = {
    thesis_id: number | null
    title: string | null
    description: string | null
    supervisor_id: number | null
    requirements: string | null
    thesis_type: string | null
    application_start: Date | null
    application_end: Date | null
    thesis_start: Date | null
    thesis_end: Date | null
  }

  export type Thesis_proposalMaxAggregateOutputType = {
    thesis_id: number | null
    title: string | null
    description: string | null
    supervisor_id: number | null
    requirements: string | null
    thesis_type: string | null
    application_start: Date | null
    application_end: Date | null
    thesis_start: Date | null
    thesis_end: Date | null
  }

  export type Thesis_proposalCountAggregateOutputType = {
    thesis_id: number
    title: number
    description: number
    supervisor_id: number
    requirements: number
    thesis_type: number
    application_start: number
    application_end: number
    thesis_start: number
    thesis_end: number
    _all: number
  }


  export type Thesis_proposalAvgAggregateInputType = {
    thesis_id?: true
    supervisor_id?: true
  }

  export type Thesis_proposalSumAggregateInputType = {
    thesis_id?: true
    supervisor_id?: true
  }

  export type Thesis_proposalMinAggregateInputType = {
    thesis_id?: true
    title?: true
    description?: true
    supervisor_id?: true
    requirements?: true
    thesis_type?: true
    application_start?: true
    application_end?: true
    thesis_start?: true
    thesis_end?: true
  }

  export type Thesis_proposalMaxAggregateInputType = {
    thesis_id?: true
    title?: true
    description?: true
    supervisor_id?: true
    requirements?: true
    thesis_type?: true
    application_start?: true
    application_end?: true
    thesis_start?: true
    thesis_end?: true
  }

  export type Thesis_proposalCountAggregateInputType = {
    thesis_id?: true
    title?: true
    description?: true
    supervisor_id?: true
    requirements?: true
    thesis_type?: true
    application_start?: true
    application_end?: true
    thesis_start?: true
    thesis_end?: true
    _all?: true
  }

  export type Thesis_proposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which thesis_proposal to aggregate.
     */
    where?: thesis_proposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of thesis_proposals to fetch.
     */
    orderBy?: thesis_proposalOrderByWithRelationInput | thesis_proposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: thesis_proposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` thesis_proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` thesis_proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned thesis_proposals
    **/
    _count?: true | Thesis_proposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Thesis_proposalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Thesis_proposalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Thesis_proposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Thesis_proposalMaxAggregateInputType
  }

  export type GetThesis_proposalAggregateType<T extends Thesis_proposalAggregateArgs> = {
        [P in keyof T & keyof AggregateThesis_proposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThesis_proposal[P]>
      : GetScalarType<T[P], AggregateThesis_proposal[P]>
  }




  export type thesis_proposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: thesis_proposalWhereInput
    orderBy?: thesis_proposalOrderByWithAggregationInput | thesis_proposalOrderByWithAggregationInput[]
    by: Thesis_proposalScalarFieldEnum[] | Thesis_proposalScalarFieldEnum
    having?: thesis_proposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Thesis_proposalCountAggregateInputType | true
    _avg?: Thesis_proposalAvgAggregateInputType
    _sum?: Thesis_proposalSumAggregateInputType
    _min?: Thesis_proposalMinAggregateInputType
    _max?: Thesis_proposalMaxAggregateInputType
  }

  export type Thesis_proposalGroupByOutputType = {
    thesis_id: number
    title: string
    description: string
    supervisor_id: number
    requirements: string | null
    thesis_type: string
    application_start: Date | null
    application_end: Date | null
    thesis_start: Date | null
    thesis_end: Date | null
    _count: Thesis_proposalCountAggregateOutputType | null
    _avg: Thesis_proposalAvgAggregateOutputType | null
    _sum: Thesis_proposalSumAggregateOutputType | null
    _min: Thesis_proposalMinAggregateOutputType | null
    _max: Thesis_proposalMaxAggregateOutputType | null
  }

  type GetThesis_proposalGroupByPayload<T extends thesis_proposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Thesis_proposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Thesis_proposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Thesis_proposalGroupByOutputType[P]>
            : GetScalarType<T[P], Thesis_proposalGroupByOutputType[P]>
        }
      >
    >


  export type thesis_proposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    thesis_id?: boolean
    title?: boolean
    description?: boolean
    supervisor_id?: boolean
    requirements?: boolean
    thesis_type?: boolean
    application_start?: boolean
    application_end?: boolean
    thesis_start?: boolean
    thesis_end?: boolean
    supervisor?: boolean | supervisorDefaultArgs<ExtArgs>
    thesis_proposal_tag?: boolean | thesis_proposal$thesis_proposal_tagArgs<ExtArgs>
    _count?: boolean | Thesis_proposalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thesis_proposal"]>

  export type thesis_proposalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    thesis_id?: boolean
    title?: boolean
    description?: boolean
    supervisor_id?: boolean
    requirements?: boolean
    thesis_type?: boolean
    application_start?: boolean
    application_end?: boolean
    thesis_start?: boolean
    thesis_end?: boolean
    supervisor?: boolean | supervisorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thesis_proposal"]>

  export type thesis_proposalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    thesis_id?: boolean
    title?: boolean
    description?: boolean
    supervisor_id?: boolean
    requirements?: boolean
    thesis_type?: boolean
    application_start?: boolean
    application_end?: boolean
    thesis_start?: boolean
    thesis_end?: boolean
    supervisor?: boolean | supervisorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thesis_proposal"]>

  export type thesis_proposalSelectScalar = {
    thesis_id?: boolean
    title?: boolean
    description?: boolean
    supervisor_id?: boolean
    requirements?: boolean
    thesis_type?: boolean
    application_start?: boolean
    application_end?: boolean
    thesis_start?: boolean
    thesis_end?: boolean
  }

  export type thesis_proposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"thesis_id" | "title" | "description" | "supervisor_id" | "requirements" | "thesis_type" | "application_start" | "application_end" | "thesis_start" | "thesis_end", ExtArgs["result"]["thesis_proposal"]>
  export type thesis_proposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supervisor?: boolean | supervisorDefaultArgs<ExtArgs>
    thesis_proposal_tag?: boolean | thesis_proposal$thesis_proposal_tagArgs<ExtArgs>
    _count?: boolean | Thesis_proposalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type thesis_proposalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supervisor?: boolean | supervisorDefaultArgs<ExtArgs>
  }
  export type thesis_proposalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supervisor?: boolean | supervisorDefaultArgs<ExtArgs>
  }

  export type $thesis_proposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "thesis_proposal"
    objects: {
      supervisor: Prisma.$supervisorPayload<ExtArgs>
      thesis_proposal_tag: Prisma.$thesis_proposal_tagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      thesis_id: number
      title: string
      description: string
      supervisor_id: number
      requirements: string | null
      thesis_type: string
      application_start: Date | null
      application_end: Date | null
      thesis_start: Date | null
      thesis_end: Date | null
    }, ExtArgs["result"]["thesis_proposal"]>
    composites: {}
  }

  type thesis_proposalGetPayload<S extends boolean | null | undefined | thesis_proposalDefaultArgs> = $Result.GetResult<Prisma.$thesis_proposalPayload, S>

  type thesis_proposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<thesis_proposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Thesis_proposalCountAggregateInputType | true
    }

  export interface thesis_proposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['thesis_proposal'], meta: { name: 'thesis_proposal' } }
    /**
     * Find zero or one Thesis_proposal that matches the filter.
     * @param {thesis_proposalFindUniqueArgs} args - Arguments to find a Thesis_proposal
     * @example
     * // Get one Thesis_proposal
     * const thesis_proposal = await prisma.thesis_proposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends thesis_proposalFindUniqueArgs>(args: SelectSubset<T, thesis_proposalFindUniqueArgs<ExtArgs>>): Prisma__thesis_proposalClient<$Result.GetResult<Prisma.$thesis_proposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Thesis_proposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {thesis_proposalFindUniqueOrThrowArgs} args - Arguments to find a Thesis_proposal
     * @example
     * // Get one Thesis_proposal
     * const thesis_proposal = await prisma.thesis_proposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends thesis_proposalFindUniqueOrThrowArgs>(args: SelectSubset<T, thesis_proposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__thesis_proposalClient<$Result.GetResult<Prisma.$thesis_proposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thesis_proposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thesis_proposalFindFirstArgs} args - Arguments to find a Thesis_proposal
     * @example
     * // Get one Thesis_proposal
     * const thesis_proposal = await prisma.thesis_proposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends thesis_proposalFindFirstArgs>(args?: SelectSubset<T, thesis_proposalFindFirstArgs<ExtArgs>>): Prisma__thesis_proposalClient<$Result.GetResult<Prisma.$thesis_proposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thesis_proposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thesis_proposalFindFirstOrThrowArgs} args - Arguments to find a Thesis_proposal
     * @example
     * // Get one Thesis_proposal
     * const thesis_proposal = await prisma.thesis_proposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends thesis_proposalFindFirstOrThrowArgs>(args?: SelectSubset<T, thesis_proposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__thesis_proposalClient<$Result.GetResult<Prisma.$thesis_proposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Thesis_proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thesis_proposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Thesis_proposals
     * const thesis_proposals = await prisma.thesis_proposal.findMany()
     * 
     * // Get first 10 Thesis_proposals
     * const thesis_proposals = await prisma.thesis_proposal.findMany({ take: 10 })
     * 
     * // Only select the `thesis_id`
     * const thesis_proposalWithThesis_idOnly = await prisma.thesis_proposal.findMany({ select: { thesis_id: true } })
     * 
     */
    findMany<T extends thesis_proposalFindManyArgs>(args?: SelectSubset<T, thesis_proposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$thesis_proposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Thesis_proposal.
     * @param {thesis_proposalCreateArgs} args - Arguments to create a Thesis_proposal.
     * @example
     * // Create one Thesis_proposal
     * const Thesis_proposal = await prisma.thesis_proposal.create({
     *   data: {
     *     // ... data to create a Thesis_proposal
     *   }
     * })
     * 
     */
    create<T extends thesis_proposalCreateArgs>(args: SelectSubset<T, thesis_proposalCreateArgs<ExtArgs>>): Prisma__thesis_proposalClient<$Result.GetResult<Prisma.$thesis_proposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Thesis_proposals.
     * @param {thesis_proposalCreateManyArgs} args - Arguments to create many Thesis_proposals.
     * @example
     * // Create many Thesis_proposals
     * const thesis_proposal = await prisma.thesis_proposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends thesis_proposalCreateManyArgs>(args?: SelectSubset<T, thesis_proposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Thesis_proposals and returns the data saved in the database.
     * @param {thesis_proposalCreateManyAndReturnArgs} args - Arguments to create many Thesis_proposals.
     * @example
     * // Create many Thesis_proposals
     * const thesis_proposal = await prisma.thesis_proposal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Thesis_proposals and only return the `thesis_id`
     * const thesis_proposalWithThesis_idOnly = await prisma.thesis_proposal.createManyAndReturn({
     *   select: { thesis_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends thesis_proposalCreateManyAndReturnArgs>(args?: SelectSubset<T, thesis_proposalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$thesis_proposalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Thesis_proposal.
     * @param {thesis_proposalDeleteArgs} args - Arguments to delete one Thesis_proposal.
     * @example
     * // Delete one Thesis_proposal
     * const Thesis_proposal = await prisma.thesis_proposal.delete({
     *   where: {
     *     // ... filter to delete one Thesis_proposal
     *   }
     * })
     * 
     */
    delete<T extends thesis_proposalDeleteArgs>(args: SelectSubset<T, thesis_proposalDeleteArgs<ExtArgs>>): Prisma__thesis_proposalClient<$Result.GetResult<Prisma.$thesis_proposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Thesis_proposal.
     * @param {thesis_proposalUpdateArgs} args - Arguments to update one Thesis_proposal.
     * @example
     * // Update one Thesis_proposal
     * const thesis_proposal = await prisma.thesis_proposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends thesis_proposalUpdateArgs>(args: SelectSubset<T, thesis_proposalUpdateArgs<ExtArgs>>): Prisma__thesis_proposalClient<$Result.GetResult<Prisma.$thesis_proposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Thesis_proposals.
     * @param {thesis_proposalDeleteManyArgs} args - Arguments to filter Thesis_proposals to delete.
     * @example
     * // Delete a few Thesis_proposals
     * const { count } = await prisma.thesis_proposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends thesis_proposalDeleteManyArgs>(args?: SelectSubset<T, thesis_proposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Thesis_proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thesis_proposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Thesis_proposals
     * const thesis_proposal = await prisma.thesis_proposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends thesis_proposalUpdateManyArgs>(args: SelectSubset<T, thesis_proposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Thesis_proposals and returns the data updated in the database.
     * @param {thesis_proposalUpdateManyAndReturnArgs} args - Arguments to update many Thesis_proposals.
     * @example
     * // Update many Thesis_proposals
     * const thesis_proposal = await prisma.thesis_proposal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Thesis_proposals and only return the `thesis_id`
     * const thesis_proposalWithThesis_idOnly = await prisma.thesis_proposal.updateManyAndReturn({
     *   select: { thesis_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends thesis_proposalUpdateManyAndReturnArgs>(args: SelectSubset<T, thesis_proposalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$thesis_proposalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Thesis_proposal.
     * @param {thesis_proposalUpsertArgs} args - Arguments to update or create a Thesis_proposal.
     * @example
     * // Update or create a Thesis_proposal
     * const thesis_proposal = await prisma.thesis_proposal.upsert({
     *   create: {
     *     // ... data to create a Thesis_proposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thesis_proposal we want to update
     *   }
     * })
     */
    upsert<T extends thesis_proposalUpsertArgs>(args: SelectSubset<T, thesis_proposalUpsertArgs<ExtArgs>>): Prisma__thesis_proposalClient<$Result.GetResult<Prisma.$thesis_proposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Thesis_proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thesis_proposalCountArgs} args - Arguments to filter Thesis_proposals to count.
     * @example
     * // Count the number of Thesis_proposals
     * const count = await prisma.thesis_proposal.count({
     *   where: {
     *     // ... the filter for the Thesis_proposals we want to count
     *   }
     * })
    **/
    count<T extends thesis_proposalCountArgs>(
      args?: Subset<T, thesis_proposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Thesis_proposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thesis_proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Thesis_proposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Thesis_proposalAggregateArgs>(args: Subset<T, Thesis_proposalAggregateArgs>): Prisma.PrismaPromise<GetThesis_proposalAggregateType<T>>

    /**
     * Group by Thesis_proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thesis_proposalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends thesis_proposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: thesis_proposalGroupByArgs['orderBy'] }
        : { orderBy?: thesis_proposalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, thesis_proposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThesis_proposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the thesis_proposal model
   */
  readonly fields: thesis_proposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for thesis_proposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__thesis_proposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supervisor<T extends supervisorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, supervisorDefaultArgs<ExtArgs>>): Prisma__supervisorClient<$Result.GetResult<Prisma.$supervisorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    thesis_proposal_tag<T extends thesis_proposal$thesis_proposal_tagArgs<ExtArgs> = {}>(args?: Subset<T, thesis_proposal$thesis_proposal_tagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$thesis_proposal_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the thesis_proposal model
   */
  interface thesis_proposalFieldRefs {
    readonly thesis_id: FieldRef<"thesis_proposal", 'Int'>
    readonly title: FieldRef<"thesis_proposal", 'String'>
    readonly description: FieldRef<"thesis_proposal", 'String'>
    readonly supervisor_id: FieldRef<"thesis_proposal", 'Int'>
    readonly requirements: FieldRef<"thesis_proposal", 'String'>
    readonly thesis_type: FieldRef<"thesis_proposal", 'String'>
    readonly application_start: FieldRef<"thesis_proposal", 'DateTime'>
    readonly application_end: FieldRef<"thesis_proposal", 'DateTime'>
    readonly thesis_start: FieldRef<"thesis_proposal", 'DateTime'>
    readonly thesis_end: FieldRef<"thesis_proposal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * thesis_proposal findUnique
   */
  export type thesis_proposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal
     */
    select?: thesis_proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal
     */
    omit?: thesis_proposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposalInclude<ExtArgs> | null
    /**
     * Filter, which thesis_proposal to fetch.
     */
    where: thesis_proposalWhereUniqueInput
  }

  /**
   * thesis_proposal findUniqueOrThrow
   */
  export type thesis_proposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal
     */
    select?: thesis_proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal
     */
    omit?: thesis_proposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposalInclude<ExtArgs> | null
    /**
     * Filter, which thesis_proposal to fetch.
     */
    where: thesis_proposalWhereUniqueInput
  }

  /**
   * thesis_proposal findFirst
   */
  export type thesis_proposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal
     */
    select?: thesis_proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal
     */
    omit?: thesis_proposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposalInclude<ExtArgs> | null
    /**
     * Filter, which thesis_proposal to fetch.
     */
    where?: thesis_proposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of thesis_proposals to fetch.
     */
    orderBy?: thesis_proposalOrderByWithRelationInput | thesis_proposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for thesis_proposals.
     */
    cursor?: thesis_proposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` thesis_proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` thesis_proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of thesis_proposals.
     */
    distinct?: Thesis_proposalScalarFieldEnum | Thesis_proposalScalarFieldEnum[]
  }

  /**
   * thesis_proposal findFirstOrThrow
   */
  export type thesis_proposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal
     */
    select?: thesis_proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal
     */
    omit?: thesis_proposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposalInclude<ExtArgs> | null
    /**
     * Filter, which thesis_proposal to fetch.
     */
    where?: thesis_proposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of thesis_proposals to fetch.
     */
    orderBy?: thesis_proposalOrderByWithRelationInput | thesis_proposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for thesis_proposals.
     */
    cursor?: thesis_proposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` thesis_proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` thesis_proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of thesis_proposals.
     */
    distinct?: Thesis_proposalScalarFieldEnum | Thesis_proposalScalarFieldEnum[]
  }

  /**
   * thesis_proposal findMany
   */
  export type thesis_proposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal
     */
    select?: thesis_proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal
     */
    omit?: thesis_proposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposalInclude<ExtArgs> | null
    /**
     * Filter, which thesis_proposals to fetch.
     */
    where?: thesis_proposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of thesis_proposals to fetch.
     */
    orderBy?: thesis_proposalOrderByWithRelationInput | thesis_proposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing thesis_proposals.
     */
    cursor?: thesis_proposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` thesis_proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` thesis_proposals.
     */
    skip?: number
    distinct?: Thesis_proposalScalarFieldEnum | Thesis_proposalScalarFieldEnum[]
  }

  /**
   * thesis_proposal create
   */
  export type thesis_proposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal
     */
    select?: thesis_proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal
     */
    omit?: thesis_proposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposalInclude<ExtArgs> | null
    /**
     * The data needed to create a thesis_proposal.
     */
    data: XOR<thesis_proposalCreateInput, thesis_proposalUncheckedCreateInput>
  }

  /**
   * thesis_proposal createMany
   */
  export type thesis_proposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many thesis_proposals.
     */
    data: thesis_proposalCreateManyInput | thesis_proposalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * thesis_proposal createManyAndReturn
   */
  export type thesis_proposalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal
     */
    select?: thesis_proposalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal
     */
    omit?: thesis_proposalOmit<ExtArgs> | null
    /**
     * The data used to create many thesis_proposals.
     */
    data: thesis_proposalCreateManyInput | thesis_proposalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * thesis_proposal update
   */
  export type thesis_proposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal
     */
    select?: thesis_proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal
     */
    omit?: thesis_proposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposalInclude<ExtArgs> | null
    /**
     * The data needed to update a thesis_proposal.
     */
    data: XOR<thesis_proposalUpdateInput, thesis_proposalUncheckedUpdateInput>
    /**
     * Choose, which thesis_proposal to update.
     */
    where: thesis_proposalWhereUniqueInput
  }

  /**
   * thesis_proposal updateMany
   */
  export type thesis_proposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update thesis_proposals.
     */
    data: XOR<thesis_proposalUpdateManyMutationInput, thesis_proposalUncheckedUpdateManyInput>
    /**
     * Filter which thesis_proposals to update
     */
    where?: thesis_proposalWhereInput
    /**
     * Limit how many thesis_proposals to update.
     */
    limit?: number
  }

  /**
   * thesis_proposal updateManyAndReturn
   */
  export type thesis_proposalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal
     */
    select?: thesis_proposalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal
     */
    omit?: thesis_proposalOmit<ExtArgs> | null
    /**
     * The data used to update thesis_proposals.
     */
    data: XOR<thesis_proposalUpdateManyMutationInput, thesis_proposalUncheckedUpdateManyInput>
    /**
     * Filter which thesis_proposals to update
     */
    where?: thesis_proposalWhereInput
    /**
     * Limit how many thesis_proposals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * thesis_proposal upsert
   */
  export type thesis_proposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal
     */
    select?: thesis_proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal
     */
    omit?: thesis_proposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposalInclude<ExtArgs> | null
    /**
     * The filter to search for the thesis_proposal to update in case it exists.
     */
    where: thesis_proposalWhereUniqueInput
    /**
     * In case the thesis_proposal found by the `where` argument doesn't exist, create a new thesis_proposal with this data.
     */
    create: XOR<thesis_proposalCreateInput, thesis_proposalUncheckedCreateInput>
    /**
     * In case the thesis_proposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<thesis_proposalUpdateInput, thesis_proposalUncheckedUpdateInput>
  }

  /**
   * thesis_proposal delete
   */
  export type thesis_proposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal
     */
    select?: thesis_proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal
     */
    omit?: thesis_proposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposalInclude<ExtArgs> | null
    /**
     * Filter which thesis_proposal to delete.
     */
    where: thesis_proposalWhereUniqueInput
  }

  /**
   * thesis_proposal deleteMany
   */
  export type thesis_proposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which thesis_proposals to delete
     */
    where?: thesis_proposalWhereInput
    /**
     * Limit how many thesis_proposals to delete.
     */
    limit?: number
  }

  /**
   * thesis_proposal.thesis_proposal_tag
   */
  export type thesis_proposal$thesis_proposal_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal_tag
     */
    select?: thesis_proposal_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal_tag
     */
    omit?: thesis_proposal_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposal_tagInclude<ExtArgs> | null
    where?: thesis_proposal_tagWhereInput
    orderBy?: thesis_proposal_tagOrderByWithRelationInput | thesis_proposal_tagOrderByWithRelationInput[]
    cursor?: thesis_proposal_tagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Thesis_proposal_tagScalarFieldEnum | Thesis_proposal_tagScalarFieldEnum[]
  }

  /**
   * thesis_proposal without action
   */
  export type thesis_proposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal
     */
    select?: thesis_proposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal
     */
    omit?: thesis_proposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposalInclude<ExtArgs> | null
  }


  /**
   * Model thesis_proposal_tag
   */

  export type AggregateThesis_proposal_tag = {
    _count: Thesis_proposal_tagCountAggregateOutputType | null
    _avg: Thesis_proposal_tagAvgAggregateOutputType | null
    _sum: Thesis_proposal_tagSumAggregateOutputType | null
    _min: Thesis_proposal_tagMinAggregateOutputType | null
    _max: Thesis_proposal_tagMaxAggregateOutputType | null
  }

  export type Thesis_proposal_tagAvgAggregateOutputType = {
    thesis_id: number | null
  }

  export type Thesis_proposal_tagSumAggregateOutputType = {
    thesis_id: number | null
  }

  export type Thesis_proposal_tagMinAggregateOutputType = {
    tag_name: string | null
    thesis_id: number | null
  }

  export type Thesis_proposal_tagMaxAggregateOutputType = {
    tag_name: string | null
    thesis_id: number | null
  }

  export type Thesis_proposal_tagCountAggregateOutputType = {
    tag_name: number
    thesis_id: number
    _all: number
  }


  export type Thesis_proposal_tagAvgAggregateInputType = {
    thesis_id?: true
  }

  export type Thesis_proposal_tagSumAggregateInputType = {
    thesis_id?: true
  }

  export type Thesis_proposal_tagMinAggregateInputType = {
    tag_name?: true
    thesis_id?: true
  }

  export type Thesis_proposal_tagMaxAggregateInputType = {
    tag_name?: true
    thesis_id?: true
  }

  export type Thesis_proposal_tagCountAggregateInputType = {
    tag_name?: true
    thesis_id?: true
    _all?: true
  }

  export type Thesis_proposal_tagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which thesis_proposal_tag to aggregate.
     */
    where?: thesis_proposal_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of thesis_proposal_tags to fetch.
     */
    orderBy?: thesis_proposal_tagOrderByWithRelationInput | thesis_proposal_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: thesis_proposal_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` thesis_proposal_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` thesis_proposal_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned thesis_proposal_tags
    **/
    _count?: true | Thesis_proposal_tagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Thesis_proposal_tagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Thesis_proposal_tagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Thesis_proposal_tagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Thesis_proposal_tagMaxAggregateInputType
  }

  export type GetThesis_proposal_tagAggregateType<T extends Thesis_proposal_tagAggregateArgs> = {
        [P in keyof T & keyof AggregateThesis_proposal_tag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThesis_proposal_tag[P]>
      : GetScalarType<T[P], AggregateThesis_proposal_tag[P]>
  }




  export type thesis_proposal_tagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: thesis_proposal_tagWhereInput
    orderBy?: thesis_proposal_tagOrderByWithAggregationInput | thesis_proposal_tagOrderByWithAggregationInput[]
    by: Thesis_proposal_tagScalarFieldEnum[] | Thesis_proposal_tagScalarFieldEnum
    having?: thesis_proposal_tagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Thesis_proposal_tagCountAggregateInputType | true
    _avg?: Thesis_proposal_tagAvgAggregateInputType
    _sum?: Thesis_proposal_tagSumAggregateInputType
    _min?: Thesis_proposal_tagMinAggregateInputType
    _max?: Thesis_proposal_tagMaxAggregateInputType
  }

  export type Thesis_proposal_tagGroupByOutputType = {
    tag_name: string
    thesis_id: number
    _count: Thesis_proposal_tagCountAggregateOutputType | null
    _avg: Thesis_proposal_tagAvgAggregateOutputType | null
    _sum: Thesis_proposal_tagSumAggregateOutputType | null
    _min: Thesis_proposal_tagMinAggregateOutputType | null
    _max: Thesis_proposal_tagMaxAggregateOutputType | null
  }

  type GetThesis_proposal_tagGroupByPayload<T extends thesis_proposal_tagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Thesis_proposal_tagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Thesis_proposal_tagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Thesis_proposal_tagGroupByOutputType[P]>
            : GetScalarType<T[P], Thesis_proposal_tagGroupByOutputType[P]>
        }
      >
    >


  export type thesis_proposal_tagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_name?: boolean
    thesis_id?: boolean
    tag?: boolean | tagDefaultArgs<ExtArgs>
    thesis_proposal?: boolean | thesis_proposalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thesis_proposal_tag"]>

  export type thesis_proposal_tagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_name?: boolean
    thesis_id?: boolean
    tag?: boolean | tagDefaultArgs<ExtArgs>
    thesis_proposal?: boolean | thesis_proposalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thesis_proposal_tag"]>

  export type thesis_proposal_tagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    tag_name?: boolean
    thesis_id?: boolean
    tag?: boolean | tagDefaultArgs<ExtArgs>
    thesis_proposal?: boolean | thesis_proposalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thesis_proposal_tag"]>

  export type thesis_proposal_tagSelectScalar = {
    tag_name?: boolean
    thesis_id?: boolean
  }

  export type thesis_proposal_tagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"tag_name" | "thesis_id", ExtArgs["result"]["thesis_proposal_tag"]>
  export type thesis_proposal_tagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | tagDefaultArgs<ExtArgs>
    thesis_proposal?: boolean | thesis_proposalDefaultArgs<ExtArgs>
  }
  export type thesis_proposal_tagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | tagDefaultArgs<ExtArgs>
    thesis_proposal?: boolean | thesis_proposalDefaultArgs<ExtArgs>
  }
  export type thesis_proposal_tagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tag?: boolean | tagDefaultArgs<ExtArgs>
    thesis_proposal?: boolean | thesis_proposalDefaultArgs<ExtArgs>
  }

  export type $thesis_proposal_tagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "thesis_proposal_tag"
    objects: {
      tag: Prisma.$tagPayload<ExtArgs>
      thesis_proposal: Prisma.$thesis_proposalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      tag_name: string
      thesis_id: number
    }, ExtArgs["result"]["thesis_proposal_tag"]>
    composites: {}
  }

  type thesis_proposal_tagGetPayload<S extends boolean | null | undefined | thesis_proposal_tagDefaultArgs> = $Result.GetResult<Prisma.$thesis_proposal_tagPayload, S>

  type thesis_proposal_tagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<thesis_proposal_tagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Thesis_proposal_tagCountAggregateInputType | true
    }

  export interface thesis_proposal_tagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['thesis_proposal_tag'], meta: { name: 'thesis_proposal_tag' } }
    /**
     * Find zero or one Thesis_proposal_tag that matches the filter.
     * @param {thesis_proposal_tagFindUniqueArgs} args - Arguments to find a Thesis_proposal_tag
     * @example
     * // Get one Thesis_proposal_tag
     * const thesis_proposal_tag = await prisma.thesis_proposal_tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends thesis_proposal_tagFindUniqueArgs>(args: SelectSubset<T, thesis_proposal_tagFindUniqueArgs<ExtArgs>>): Prisma__thesis_proposal_tagClient<$Result.GetResult<Prisma.$thesis_proposal_tagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Thesis_proposal_tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {thesis_proposal_tagFindUniqueOrThrowArgs} args - Arguments to find a Thesis_proposal_tag
     * @example
     * // Get one Thesis_proposal_tag
     * const thesis_proposal_tag = await prisma.thesis_proposal_tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends thesis_proposal_tagFindUniqueOrThrowArgs>(args: SelectSubset<T, thesis_proposal_tagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__thesis_proposal_tagClient<$Result.GetResult<Prisma.$thesis_proposal_tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thesis_proposal_tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thesis_proposal_tagFindFirstArgs} args - Arguments to find a Thesis_proposal_tag
     * @example
     * // Get one Thesis_proposal_tag
     * const thesis_proposal_tag = await prisma.thesis_proposal_tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends thesis_proposal_tagFindFirstArgs>(args?: SelectSubset<T, thesis_proposal_tagFindFirstArgs<ExtArgs>>): Prisma__thesis_proposal_tagClient<$Result.GetResult<Prisma.$thesis_proposal_tagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thesis_proposal_tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thesis_proposal_tagFindFirstOrThrowArgs} args - Arguments to find a Thesis_proposal_tag
     * @example
     * // Get one Thesis_proposal_tag
     * const thesis_proposal_tag = await prisma.thesis_proposal_tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends thesis_proposal_tagFindFirstOrThrowArgs>(args?: SelectSubset<T, thesis_proposal_tagFindFirstOrThrowArgs<ExtArgs>>): Prisma__thesis_proposal_tagClient<$Result.GetResult<Prisma.$thesis_proposal_tagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Thesis_proposal_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thesis_proposal_tagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Thesis_proposal_tags
     * const thesis_proposal_tags = await prisma.thesis_proposal_tag.findMany()
     * 
     * // Get first 10 Thesis_proposal_tags
     * const thesis_proposal_tags = await prisma.thesis_proposal_tag.findMany({ take: 10 })
     * 
     * // Only select the `tag_name`
     * const thesis_proposal_tagWithTag_nameOnly = await prisma.thesis_proposal_tag.findMany({ select: { tag_name: true } })
     * 
     */
    findMany<T extends thesis_proposal_tagFindManyArgs>(args?: SelectSubset<T, thesis_proposal_tagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$thesis_proposal_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Thesis_proposal_tag.
     * @param {thesis_proposal_tagCreateArgs} args - Arguments to create a Thesis_proposal_tag.
     * @example
     * // Create one Thesis_proposal_tag
     * const Thesis_proposal_tag = await prisma.thesis_proposal_tag.create({
     *   data: {
     *     // ... data to create a Thesis_proposal_tag
     *   }
     * })
     * 
     */
    create<T extends thesis_proposal_tagCreateArgs>(args: SelectSubset<T, thesis_proposal_tagCreateArgs<ExtArgs>>): Prisma__thesis_proposal_tagClient<$Result.GetResult<Prisma.$thesis_proposal_tagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Thesis_proposal_tags.
     * @param {thesis_proposal_tagCreateManyArgs} args - Arguments to create many Thesis_proposal_tags.
     * @example
     * // Create many Thesis_proposal_tags
     * const thesis_proposal_tag = await prisma.thesis_proposal_tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends thesis_proposal_tagCreateManyArgs>(args?: SelectSubset<T, thesis_proposal_tagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Thesis_proposal_tags and returns the data saved in the database.
     * @param {thesis_proposal_tagCreateManyAndReturnArgs} args - Arguments to create many Thesis_proposal_tags.
     * @example
     * // Create many Thesis_proposal_tags
     * const thesis_proposal_tag = await prisma.thesis_proposal_tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Thesis_proposal_tags and only return the `tag_name`
     * const thesis_proposal_tagWithTag_nameOnly = await prisma.thesis_proposal_tag.createManyAndReturn({
     *   select: { tag_name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends thesis_proposal_tagCreateManyAndReturnArgs>(args?: SelectSubset<T, thesis_proposal_tagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$thesis_proposal_tagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Thesis_proposal_tag.
     * @param {thesis_proposal_tagDeleteArgs} args - Arguments to delete one Thesis_proposal_tag.
     * @example
     * // Delete one Thesis_proposal_tag
     * const Thesis_proposal_tag = await prisma.thesis_proposal_tag.delete({
     *   where: {
     *     // ... filter to delete one Thesis_proposal_tag
     *   }
     * })
     * 
     */
    delete<T extends thesis_proposal_tagDeleteArgs>(args: SelectSubset<T, thesis_proposal_tagDeleteArgs<ExtArgs>>): Prisma__thesis_proposal_tagClient<$Result.GetResult<Prisma.$thesis_proposal_tagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Thesis_proposal_tag.
     * @param {thesis_proposal_tagUpdateArgs} args - Arguments to update one Thesis_proposal_tag.
     * @example
     * // Update one Thesis_proposal_tag
     * const thesis_proposal_tag = await prisma.thesis_proposal_tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends thesis_proposal_tagUpdateArgs>(args: SelectSubset<T, thesis_proposal_tagUpdateArgs<ExtArgs>>): Prisma__thesis_proposal_tagClient<$Result.GetResult<Prisma.$thesis_proposal_tagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Thesis_proposal_tags.
     * @param {thesis_proposal_tagDeleteManyArgs} args - Arguments to filter Thesis_proposal_tags to delete.
     * @example
     * // Delete a few Thesis_proposal_tags
     * const { count } = await prisma.thesis_proposal_tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends thesis_proposal_tagDeleteManyArgs>(args?: SelectSubset<T, thesis_proposal_tagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Thesis_proposal_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thesis_proposal_tagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Thesis_proposal_tags
     * const thesis_proposal_tag = await prisma.thesis_proposal_tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends thesis_proposal_tagUpdateManyArgs>(args: SelectSubset<T, thesis_proposal_tagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Thesis_proposal_tags and returns the data updated in the database.
     * @param {thesis_proposal_tagUpdateManyAndReturnArgs} args - Arguments to update many Thesis_proposal_tags.
     * @example
     * // Update many Thesis_proposal_tags
     * const thesis_proposal_tag = await prisma.thesis_proposal_tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Thesis_proposal_tags and only return the `tag_name`
     * const thesis_proposal_tagWithTag_nameOnly = await prisma.thesis_proposal_tag.updateManyAndReturn({
     *   select: { tag_name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends thesis_proposal_tagUpdateManyAndReturnArgs>(args: SelectSubset<T, thesis_proposal_tagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$thesis_proposal_tagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Thesis_proposal_tag.
     * @param {thesis_proposal_tagUpsertArgs} args - Arguments to update or create a Thesis_proposal_tag.
     * @example
     * // Update or create a Thesis_proposal_tag
     * const thesis_proposal_tag = await prisma.thesis_proposal_tag.upsert({
     *   create: {
     *     // ... data to create a Thesis_proposal_tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thesis_proposal_tag we want to update
     *   }
     * })
     */
    upsert<T extends thesis_proposal_tagUpsertArgs>(args: SelectSubset<T, thesis_proposal_tagUpsertArgs<ExtArgs>>): Prisma__thesis_proposal_tagClient<$Result.GetResult<Prisma.$thesis_proposal_tagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Thesis_proposal_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thesis_proposal_tagCountArgs} args - Arguments to filter Thesis_proposal_tags to count.
     * @example
     * // Count the number of Thesis_proposal_tags
     * const count = await prisma.thesis_proposal_tag.count({
     *   where: {
     *     // ... the filter for the Thesis_proposal_tags we want to count
     *   }
     * })
    **/
    count<T extends thesis_proposal_tagCountArgs>(
      args?: Subset<T, thesis_proposal_tagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Thesis_proposal_tagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thesis_proposal_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Thesis_proposal_tagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Thesis_proposal_tagAggregateArgs>(args: Subset<T, Thesis_proposal_tagAggregateArgs>): Prisma.PrismaPromise<GetThesis_proposal_tagAggregateType<T>>

    /**
     * Group by Thesis_proposal_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {thesis_proposal_tagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends thesis_proposal_tagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: thesis_proposal_tagGroupByArgs['orderBy'] }
        : { orderBy?: thesis_proposal_tagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, thesis_proposal_tagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThesis_proposal_tagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the thesis_proposal_tag model
   */
  readonly fields: thesis_proposal_tagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for thesis_proposal_tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__thesis_proposal_tagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tag<T extends tagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagDefaultArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    thesis_proposal<T extends thesis_proposalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, thesis_proposalDefaultArgs<ExtArgs>>): Prisma__thesis_proposalClient<$Result.GetResult<Prisma.$thesis_proposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the thesis_proposal_tag model
   */
  interface thesis_proposal_tagFieldRefs {
    readonly tag_name: FieldRef<"thesis_proposal_tag", 'String'>
    readonly thesis_id: FieldRef<"thesis_proposal_tag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * thesis_proposal_tag findUnique
   */
  export type thesis_proposal_tagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal_tag
     */
    select?: thesis_proposal_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal_tag
     */
    omit?: thesis_proposal_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposal_tagInclude<ExtArgs> | null
    /**
     * Filter, which thesis_proposal_tag to fetch.
     */
    where: thesis_proposal_tagWhereUniqueInput
  }

  /**
   * thesis_proposal_tag findUniqueOrThrow
   */
  export type thesis_proposal_tagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal_tag
     */
    select?: thesis_proposal_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal_tag
     */
    omit?: thesis_proposal_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposal_tagInclude<ExtArgs> | null
    /**
     * Filter, which thesis_proposal_tag to fetch.
     */
    where: thesis_proposal_tagWhereUniqueInput
  }

  /**
   * thesis_proposal_tag findFirst
   */
  export type thesis_proposal_tagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal_tag
     */
    select?: thesis_proposal_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal_tag
     */
    omit?: thesis_proposal_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposal_tagInclude<ExtArgs> | null
    /**
     * Filter, which thesis_proposal_tag to fetch.
     */
    where?: thesis_proposal_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of thesis_proposal_tags to fetch.
     */
    orderBy?: thesis_proposal_tagOrderByWithRelationInput | thesis_proposal_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for thesis_proposal_tags.
     */
    cursor?: thesis_proposal_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` thesis_proposal_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` thesis_proposal_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of thesis_proposal_tags.
     */
    distinct?: Thesis_proposal_tagScalarFieldEnum | Thesis_proposal_tagScalarFieldEnum[]
  }

  /**
   * thesis_proposal_tag findFirstOrThrow
   */
  export type thesis_proposal_tagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal_tag
     */
    select?: thesis_proposal_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal_tag
     */
    omit?: thesis_proposal_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposal_tagInclude<ExtArgs> | null
    /**
     * Filter, which thesis_proposal_tag to fetch.
     */
    where?: thesis_proposal_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of thesis_proposal_tags to fetch.
     */
    orderBy?: thesis_proposal_tagOrderByWithRelationInput | thesis_proposal_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for thesis_proposal_tags.
     */
    cursor?: thesis_proposal_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` thesis_proposal_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` thesis_proposal_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of thesis_proposal_tags.
     */
    distinct?: Thesis_proposal_tagScalarFieldEnum | Thesis_proposal_tagScalarFieldEnum[]
  }

  /**
   * thesis_proposal_tag findMany
   */
  export type thesis_proposal_tagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal_tag
     */
    select?: thesis_proposal_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal_tag
     */
    omit?: thesis_proposal_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposal_tagInclude<ExtArgs> | null
    /**
     * Filter, which thesis_proposal_tags to fetch.
     */
    where?: thesis_proposal_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of thesis_proposal_tags to fetch.
     */
    orderBy?: thesis_proposal_tagOrderByWithRelationInput | thesis_proposal_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing thesis_proposal_tags.
     */
    cursor?: thesis_proposal_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` thesis_proposal_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` thesis_proposal_tags.
     */
    skip?: number
    distinct?: Thesis_proposal_tagScalarFieldEnum | Thesis_proposal_tagScalarFieldEnum[]
  }

  /**
   * thesis_proposal_tag create
   */
  export type thesis_proposal_tagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal_tag
     */
    select?: thesis_proposal_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal_tag
     */
    omit?: thesis_proposal_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposal_tagInclude<ExtArgs> | null
    /**
     * The data needed to create a thesis_proposal_tag.
     */
    data: XOR<thesis_proposal_tagCreateInput, thesis_proposal_tagUncheckedCreateInput>
  }

  /**
   * thesis_proposal_tag createMany
   */
  export type thesis_proposal_tagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many thesis_proposal_tags.
     */
    data: thesis_proposal_tagCreateManyInput | thesis_proposal_tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * thesis_proposal_tag createManyAndReturn
   */
  export type thesis_proposal_tagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal_tag
     */
    select?: thesis_proposal_tagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal_tag
     */
    omit?: thesis_proposal_tagOmit<ExtArgs> | null
    /**
     * The data used to create many thesis_proposal_tags.
     */
    data: thesis_proposal_tagCreateManyInput | thesis_proposal_tagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposal_tagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * thesis_proposal_tag update
   */
  export type thesis_proposal_tagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal_tag
     */
    select?: thesis_proposal_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal_tag
     */
    omit?: thesis_proposal_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposal_tagInclude<ExtArgs> | null
    /**
     * The data needed to update a thesis_proposal_tag.
     */
    data: XOR<thesis_proposal_tagUpdateInput, thesis_proposal_tagUncheckedUpdateInput>
    /**
     * Choose, which thesis_proposal_tag to update.
     */
    where: thesis_proposal_tagWhereUniqueInput
  }

  /**
   * thesis_proposal_tag updateMany
   */
  export type thesis_proposal_tagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update thesis_proposal_tags.
     */
    data: XOR<thesis_proposal_tagUpdateManyMutationInput, thesis_proposal_tagUncheckedUpdateManyInput>
    /**
     * Filter which thesis_proposal_tags to update
     */
    where?: thesis_proposal_tagWhereInput
    /**
     * Limit how many thesis_proposal_tags to update.
     */
    limit?: number
  }

  /**
   * thesis_proposal_tag updateManyAndReturn
   */
  export type thesis_proposal_tagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal_tag
     */
    select?: thesis_proposal_tagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal_tag
     */
    omit?: thesis_proposal_tagOmit<ExtArgs> | null
    /**
     * The data used to update thesis_proposal_tags.
     */
    data: XOR<thesis_proposal_tagUpdateManyMutationInput, thesis_proposal_tagUncheckedUpdateManyInput>
    /**
     * Filter which thesis_proposal_tags to update
     */
    where?: thesis_proposal_tagWhereInput
    /**
     * Limit how many thesis_proposal_tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposal_tagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * thesis_proposal_tag upsert
   */
  export type thesis_proposal_tagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal_tag
     */
    select?: thesis_proposal_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal_tag
     */
    omit?: thesis_proposal_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposal_tagInclude<ExtArgs> | null
    /**
     * The filter to search for the thesis_proposal_tag to update in case it exists.
     */
    where: thesis_proposal_tagWhereUniqueInput
    /**
     * In case the thesis_proposal_tag found by the `where` argument doesn't exist, create a new thesis_proposal_tag with this data.
     */
    create: XOR<thesis_proposal_tagCreateInput, thesis_proposal_tagUncheckedCreateInput>
    /**
     * In case the thesis_proposal_tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<thesis_proposal_tagUpdateInput, thesis_proposal_tagUncheckedUpdateInput>
  }

  /**
   * thesis_proposal_tag delete
   */
  export type thesis_proposal_tagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal_tag
     */
    select?: thesis_proposal_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal_tag
     */
    omit?: thesis_proposal_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposal_tagInclude<ExtArgs> | null
    /**
     * Filter which thesis_proposal_tag to delete.
     */
    where: thesis_proposal_tagWhereUniqueInput
  }

  /**
   * thesis_proposal_tag deleteMany
   */
  export type thesis_proposal_tagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which thesis_proposal_tags to delete
     */
    where?: thesis_proposal_tagWhereInput
    /**
     * Limit how many thesis_proposal_tags to delete.
     */
    limit?: number
  }

  /**
   * thesis_proposal_tag without action
   */
  export type thesis_proposal_tagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the thesis_proposal_tag
     */
    select?: thesis_proposal_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the thesis_proposal_tag
     */
    omit?: thesis_proposal_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: thesis_proposal_tagInclude<ExtArgs> | null
  }


  /**
   * Model user_parent
   */

  export type AggregateUser_parent = {
    _count: User_parentCountAggregateOutputType | null
    _avg: User_parentAvgAggregateOutputType | null
    _sum: User_parentSumAggregateOutputType | null
    _min: User_parentMinAggregateOutputType | null
    _max: User_parentMaxAggregateOutputType | null
  }

  export type User_parentAvgAggregateOutputType = {
    user_id: number | null
    timespent: number | null
  }

  export type User_parentSumAggregateOutputType = {
    user_id: number | null
    timespent: bigint | null
  }

  export type User_parentMinAggregateOutputType = {
    user_id: number | null
    name: string | null
    surname: string | null
    role: string | null
    uni_email: string | null
    photo: Uint8Array | null
    faculty_name: string | null
    password_hash: string | null
    birthdate: Date | null
    gender: string | null
    timespent: bigint | null
    reg_date: Date | null
  }

  export type User_parentMaxAggregateOutputType = {
    user_id: number | null
    name: string | null
    surname: string | null
    role: string | null
    uni_email: string | null
    photo: Uint8Array | null
    faculty_name: string | null
    password_hash: string | null
    birthdate: Date | null
    gender: string | null
    timespent: bigint | null
    reg_date: Date | null
  }

  export type User_parentCountAggregateOutputType = {
    user_id: number
    name: number
    surname: number
    role: number
    uni_email: number
    photo: number
    faculty_name: number
    password_hash: number
    birthdate: number
    gender: number
    timespent: number
    reg_date: number
    _all: number
  }


  export type User_parentAvgAggregateInputType = {
    user_id?: true
    timespent?: true
  }

  export type User_parentSumAggregateInputType = {
    user_id?: true
    timespent?: true
  }

  export type User_parentMinAggregateInputType = {
    user_id?: true
    name?: true
    surname?: true
    role?: true
    uni_email?: true
    photo?: true
    faculty_name?: true
    password_hash?: true
    birthdate?: true
    gender?: true
    timespent?: true
    reg_date?: true
  }

  export type User_parentMaxAggregateInputType = {
    user_id?: true
    name?: true
    surname?: true
    role?: true
    uni_email?: true
    photo?: true
    faculty_name?: true
    password_hash?: true
    birthdate?: true
    gender?: true
    timespent?: true
    reg_date?: true
  }

  export type User_parentCountAggregateInputType = {
    user_id?: true
    name?: true
    surname?: true
    role?: true
    uni_email?: true
    photo?: true
    faculty_name?: true
    password_hash?: true
    birthdate?: true
    gender?: true
    timespent?: true
    reg_date?: true
    _all?: true
  }

  export type User_parentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_parent to aggregate.
     */
    where?: user_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_parents to fetch.
     */
    orderBy?: user_parentOrderByWithRelationInput | user_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: user_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned user_parents
    **/
    _count?: true | User_parentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: User_parentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: User_parentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: User_parentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: User_parentMaxAggregateInputType
  }

  export type GetUser_parentAggregateType<T extends User_parentAggregateArgs> = {
        [P in keyof T & keyof AggregateUser_parent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser_parent[P]>
      : GetScalarType<T[P], AggregateUser_parent[P]>
  }




  export type user_parentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: user_parentWhereInput
    orderBy?: user_parentOrderByWithAggregationInput | user_parentOrderByWithAggregationInput[]
    by: User_parentScalarFieldEnum[] | User_parentScalarFieldEnum
    having?: user_parentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: User_parentCountAggregateInputType | true
    _avg?: User_parentAvgAggregateInputType
    _sum?: User_parentSumAggregateInputType
    _min?: User_parentMinAggregateInputType
    _max?: User_parentMaxAggregateInputType
  }

  export type User_parentGroupByOutputType = {
    user_id: number
    name: string
    surname: string
    role: string
    uni_email: string
    photo: Uint8Array | null
    faculty_name: string
    password_hash: string
    birthdate: Date | null
    gender: string | null
    timespent: bigint
    reg_date: Date
    _count: User_parentCountAggregateOutputType | null
    _avg: User_parentAvgAggregateOutputType | null
    _sum: User_parentSumAggregateOutputType | null
    _min: User_parentMinAggregateOutputType | null
    _max: User_parentMaxAggregateOutputType | null
  }

  type GetUser_parentGroupByPayload<T extends user_parentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<User_parentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof User_parentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], User_parentGroupByOutputType[P]>
            : GetScalarType<T[P], User_parentGroupByOutputType[P]>
        }
      >
    >


  export type user_parentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    surname?: boolean
    role?: boolean
    uni_email?: boolean
    photo?: boolean
    faculty_name?: boolean
    password_hash?: boolean
    birthdate?: boolean
    gender?: boolean
    timespent?: boolean
    reg_date?: boolean
    student?: boolean | user_parent$studentArgs<ExtArgs>
    supervisor?: boolean | user_parent$supervisorArgs<ExtArgs>
    faculty?: boolean | facultyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_parent"]>

  export type user_parentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    surname?: boolean
    role?: boolean
    uni_email?: boolean
    photo?: boolean
    faculty_name?: boolean
    password_hash?: boolean
    birthdate?: boolean
    gender?: boolean
    timespent?: boolean
    reg_date?: boolean
    faculty?: boolean | facultyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_parent"]>

  export type user_parentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    name?: boolean
    surname?: boolean
    role?: boolean
    uni_email?: boolean
    photo?: boolean
    faculty_name?: boolean
    password_hash?: boolean
    birthdate?: boolean
    gender?: boolean
    timespent?: boolean
    reg_date?: boolean
    faculty?: boolean | facultyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user_parent"]>

  export type user_parentSelectScalar = {
    user_id?: boolean
    name?: boolean
    surname?: boolean
    role?: boolean
    uni_email?: boolean
    photo?: boolean
    faculty_name?: boolean
    password_hash?: boolean
    birthdate?: boolean
    gender?: boolean
    timespent?: boolean
    reg_date?: boolean
  }

  export type user_parentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "name" | "surname" | "role" | "uni_email" | "photo" | "faculty_name" | "password_hash" | "birthdate" | "gender" | "timespent" | "reg_date", ExtArgs["result"]["user_parent"]>
  export type user_parentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | user_parent$studentArgs<ExtArgs>
    supervisor?: boolean | user_parent$supervisorArgs<ExtArgs>
    faculty?: boolean | facultyDefaultArgs<ExtArgs>
  }
  export type user_parentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | facultyDefaultArgs<ExtArgs>
  }
  export type user_parentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | facultyDefaultArgs<ExtArgs>
  }

  export type $user_parentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user_parent"
    objects: {
      student: Prisma.$studentPayload<ExtArgs> | null
      supervisor: Prisma.$supervisorPayload<ExtArgs> | null
      faculty: Prisma.$facultyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      name: string
      surname: string
      role: string
      uni_email: string
      photo: Uint8Array | null
      faculty_name: string
      password_hash: string
      birthdate: Date | null
      gender: string | null
      timespent: bigint
      reg_date: Date
    }, ExtArgs["result"]["user_parent"]>
    composites: {}
  }

  type user_parentGetPayload<S extends boolean | null | undefined | user_parentDefaultArgs> = $Result.GetResult<Prisma.$user_parentPayload, S>

  type user_parentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<user_parentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: User_parentCountAggregateInputType | true
    }

  export interface user_parentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user_parent'], meta: { name: 'user_parent' } }
    /**
     * Find zero or one User_parent that matches the filter.
     * @param {user_parentFindUniqueArgs} args - Arguments to find a User_parent
     * @example
     * // Get one User_parent
     * const user_parent = await prisma.user_parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends user_parentFindUniqueArgs>(args: SelectSubset<T, user_parentFindUniqueArgs<ExtArgs>>): Prisma__user_parentClient<$Result.GetResult<Prisma.$user_parentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User_parent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {user_parentFindUniqueOrThrowArgs} args - Arguments to find a User_parent
     * @example
     * // Get one User_parent
     * const user_parent = await prisma.user_parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends user_parentFindUniqueOrThrowArgs>(args: SelectSubset<T, user_parentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__user_parentClient<$Result.GetResult<Prisma.$user_parentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_parentFindFirstArgs} args - Arguments to find a User_parent
     * @example
     * // Get one User_parent
     * const user_parent = await prisma.user_parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends user_parentFindFirstArgs>(args?: SelectSubset<T, user_parentFindFirstArgs<ExtArgs>>): Prisma__user_parentClient<$Result.GetResult<Prisma.$user_parentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User_parent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_parentFindFirstOrThrowArgs} args - Arguments to find a User_parent
     * @example
     * // Get one User_parent
     * const user_parent = await prisma.user_parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends user_parentFindFirstOrThrowArgs>(args?: SelectSubset<T, user_parentFindFirstOrThrowArgs<ExtArgs>>): Prisma__user_parentClient<$Result.GetResult<Prisma.$user_parentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more User_parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_parentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all User_parents
     * const user_parents = await prisma.user_parent.findMany()
     * 
     * // Get first 10 User_parents
     * const user_parents = await prisma.user_parent.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const user_parentWithUser_idOnly = await prisma.user_parent.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends user_parentFindManyArgs>(args?: SelectSubset<T, user_parentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_parentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User_parent.
     * @param {user_parentCreateArgs} args - Arguments to create a User_parent.
     * @example
     * // Create one User_parent
     * const User_parent = await prisma.user_parent.create({
     *   data: {
     *     // ... data to create a User_parent
     *   }
     * })
     * 
     */
    create<T extends user_parentCreateArgs>(args: SelectSubset<T, user_parentCreateArgs<ExtArgs>>): Prisma__user_parentClient<$Result.GetResult<Prisma.$user_parentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many User_parents.
     * @param {user_parentCreateManyArgs} args - Arguments to create many User_parents.
     * @example
     * // Create many User_parents
     * const user_parent = await prisma.user_parent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends user_parentCreateManyArgs>(args?: SelectSubset<T, user_parentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many User_parents and returns the data saved in the database.
     * @param {user_parentCreateManyAndReturnArgs} args - Arguments to create many User_parents.
     * @example
     * // Create many User_parents
     * const user_parent = await prisma.user_parent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many User_parents and only return the `user_id`
     * const user_parentWithUser_idOnly = await prisma.user_parent.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends user_parentCreateManyAndReturnArgs>(args?: SelectSubset<T, user_parentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_parentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User_parent.
     * @param {user_parentDeleteArgs} args - Arguments to delete one User_parent.
     * @example
     * // Delete one User_parent
     * const User_parent = await prisma.user_parent.delete({
     *   where: {
     *     // ... filter to delete one User_parent
     *   }
     * })
     * 
     */
    delete<T extends user_parentDeleteArgs>(args: SelectSubset<T, user_parentDeleteArgs<ExtArgs>>): Prisma__user_parentClient<$Result.GetResult<Prisma.$user_parentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User_parent.
     * @param {user_parentUpdateArgs} args - Arguments to update one User_parent.
     * @example
     * // Update one User_parent
     * const user_parent = await prisma.user_parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends user_parentUpdateArgs>(args: SelectSubset<T, user_parentUpdateArgs<ExtArgs>>): Prisma__user_parentClient<$Result.GetResult<Prisma.$user_parentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more User_parents.
     * @param {user_parentDeleteManyArgs} args - Arguments to filter User_parents to delete.
     * @example
     * // Delete a few User_parents
     * const { count } = await prisma.user_parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends user_parentDeleteManyArgs>(args?: SelectSubset<T, user_parentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_parentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many User_parents
     * const user_parent = await prisma.user_parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends user_parentUpdateManyArgs>(args: SelectSubset<T, user_parentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more User_parents and returns the data updated in the database.
     * @param {user_parentUpdateManyAndReturnArgs} args - Arguments to update many User_parents.
     * @example
     * // Update many User_parents
     * const user_parent = await prisma.user_parent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more User_parents and only return the `user_id`
     * const user_parentWithUser_idOnly = await prisma.user_parent.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends user_parentUpdateManyAndReturnArgs>(args: SelectSubset<T, user_parentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$user_parentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User_parent.
     * @param {user_parentUpsertArgs} args - Arguments to update or create a User_parent.
     * @example
     * // Update or create a User_parent
     * const user_parent = await prisma.user_parent.upsert({
     *   create: {
     *     // ... data to create a User_parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User_parent we want to update
     *   }
     * })
     */
    upsert<T extends user_parentUpsertArgs>(args: SelectSubset<T, user_parentUpsertArgs<ExtArgs>>): Prisma__user_parentClient<$Result.GetResult<Prisma.$user_parentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of User_parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_parentCountArgs} args - Arguments to filter User_parents to count.
     * @example
     * // Count the number of User_parents
     * const count = await prisma.user_parent.count({
     *   where: {
     *     // ... the filter for the User_parents we want to count
     *   }
     * })
    **/
    count<T extends user_parentCountArgs>(
      args?: Subset<T, user_parentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], User_parentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User_parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {User_parentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends User_parentAggregateArgs>(args: Subset<T, User_parentAggregateArgs>): Prisma.PrismaPromise<GetUser_parentAggregateType<T>>

    /**
     * Group by User_parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {user_parentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends user_parentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: user_parentGroupByArgs['orderBy'] }
        : { orderBy?: user_parentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, user_parentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUser_parentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user_parent model
   */
  readonly fields: user_parentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user_parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__user_parentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends user_parent$studentArgs<ExtArgs> = {}>(args?: Subset<T, user_parent$studentArgs<ExtArgs>>): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    supervisor<T extends user_parent$supervisorArgs<ExtArgs> = {}>(args?: Subset<T, user_parent$supervisorArgs<ExtArgs>>): Prisma__supervisorClient<$Result.GetResult<Prisma.$supervisorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    faculty<T extends facultyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, facultyDefaultArgs<ExtArgs>>): Prisma__facultyClient<$Result.GetResult<Prisma.$facultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the user_parent model
   */
  interface user_parentFieldRefs {
    readonly user_id: FieldRef<"user_parent", 'Int'>
    readonly name: FieldRef<"user_parent", 'String'>
    readonly surname: FieldRef<"user_parent", 'String'>
    readonly role: FieldRef<"user_parent", 'String'>
    readonly uni_email: FieldRef<"user_parent", 'String'>
    readonly photo: FieldRef<"user_parent", 'Bytes'>
    readonly faculty_name: FieldRef<"user_parent", 'String'>
    readonly password_hash: FieldRef<"user_parent", 'String'>
    readonly birthdate: FieldRef<"user_parent", 'DateTime'>
    readonly gender: FieldRef<"user_parent", 'String'>
    readonly timespent: FieldRef<"user_parent", 'BigInt'>
    readonly reg_date: FieldRef<"user_parent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user_parent findUnique
   */
  export type user_parentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_parent
     */
    select?: user_parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_parent
     */
    omit?: user_parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_parentInclude<ExtArgs> | null
    /**
     * Filter, which user_parent to fetch.
     */
    where: user_parentWhereUniqueInput
  }

  /**
   * user_parent findUniqueOrThrow
   */
  export type user_parentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_parent
     */
    select?: user_parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_parent
     */
    omit?: user_parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_parentInclude<ExtArgs> | null
    /**
     * Filter, which user_parent to fetch.
     */
    where: user_parentWhereUniqueInput
  }

  /**
   * user_parent findFirst
   */
  export type user_parentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_parent
     */
    select?: user_parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_parent
     */
    omit?: user_parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_parentInclude<ExtArgs> | null
    /**
     * Filter, which user_parent to fetch.
     */
    where?: user_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_parents to fetch.
     */
    orderBy?: user_parentOrderByWithRelationInput | user_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_parents.
     */
    cursor?: user_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_parents.
     */
    distinct?: User_parentScalarFieldEnum | User_parentScalarFieldEnum[]
  }

  /**
   * user_parent findFirstOrThrow
   */
  export type user_parentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_parent
     */
    select?: user_parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_parent
     */
    omit?: user_parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_parentInclude<ExtArgs> | null
    /**
     * Filter, which user_parent to fetch.
     */
    where?: user_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_parents to fetch.
     */
    orderBy?: user_parentOrderByWithRelationInput | user_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for user_parents.
     */
    cursor?: user_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_parents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of user_parents.
     */
    distinct?: User_parentScalarFieldEnum | User_parentScalarFieldEnum[]
  }

  /**
   * user_parent findMany
   */
  export type user_parentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_parent
     */
    select?: user_parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_parent
     */
    omit?: user_parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_parentInclude<ExtArgs> | null
    /**
     * Filter, which user_parents to fetch.
     */
    where?: user_parentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of user_parents to fetch.
     */
    orderBy?: user_parentOrderByWithRelationInput | user_parentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing user_parents.
     */
    cursor?: user_parentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` user_parents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` user_parents.
     */
    skip?: number
    distinct?: User_parentScalarFieldEnum | User_parentScalarFieldEnum[]
  }

  /**
   * user_parent create
   */
  export type user_parentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_parent
     */
    select?: user_parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_parent
     */
    omit?: user_parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_parentInclude<ExtArgs> | null
    /**
     * The data needed to create a user_parent.
     */
    data: XOR<user_parentCreateInput, user_parentUncheckedCreateInput>
  }

  /**
   * user_parent createMany
   */
  export type user_parentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many user_parents.
     */
    data: user_parentCreateManyInput | user_parentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user_parent createManyAndReturn
   */
  export type user_parentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_parent
     */
    select?: user_parentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_parent
     */
    omit?: user_parentOmit<ExtArgs> | null
    /**
     * The data used to create many user_parents.
     */
    data: user_parentCreateManyInput | user_parentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_parentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_parent update
   */
  export type user_parentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_parent
     */
    select?: user_parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_parent
     */
    omit?: user_parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_parentInclude<ExtArgs> | null
    /**
     * The data needed to update a user_parent.
     */
    data: XOR<user_parentUpdateInput, user_parentUncheckedUpdateInput>
    /**
     * Choose, which user_parent to update.
     */
    where: user_parentWhereUniqueInput
  }

  /**
   * user_parent updateMany
   */
  export type user_parentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update user_parents.
     */
    data: XOR<user_parentUpdateManyMutationInput, user_parentUncheckedUpdateManyInput>
    /**
     * Filter which user_parents to update
     */
    where?: user_parentWhereInput
    /**
     * Limit how many user_parents to update.
     */
    limit?: number
  }

  /**
   * user_parent updateManyAndReturn
   */
  export type user_parentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_parent
     */
    select?: user_parentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user_parent
     */
    omit?: user_parentOmit<ExtArgs> | null
    /**
     * The data used to update user_parents.
     */
    data: XOR<user_parentUpdateManyMutationInput, user_parentUncheckedUpdateManyInput>
    /**
     * Filter which user_parents to update
     */
    where?: user_parentWhereInput
    /**
     * Limit how many user_parents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_parentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * user_parent upsert
   */
  export type user_parentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_parent
     */
    select?: user_parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_parent
     */
    omit?: user_parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_parentInclude<ExtArgs> | null
    /**
     * The filter to search for the user_parent to update in case it exists.
     */
    where: user_parentWhereUniqueInput
    /**
     * In case the user_parent found by the `where` argument doesn't exist, create a new user_parent with this data.
     */
    create: XOR<user_parentCreateInput, user_parentUncheckedCreateInput>
    /**
     * In case the user_parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<user_parentUpdateInput, user_parentUncheckedUpdateInput>
  }

  /**
   * user_parent delete
   */
  export type user_parentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_parent
     */
    select?: user_parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_parent
     */
    omit?: user_parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_parentInclude<ExtArgs> | null
    /**
     * Filter which user_parent to delete.
     */
    where: user_parentWhereUniqueInput
  }

  /**
   * user_parent deleteMany
   */
  export type user_parentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user_parents to delete
     */
    where?: user_parentWhereInput
    /**
     * Limit how many user_parents to delete.
     */
    limit?: number
  }

  /**
   * user_parent.student
   */
  export type user_parent$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the student
     */
    omit?: studentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: studentInclude<ExtArgs> | null
    where?: studentWhereInput
  }

  /**
   * user_parent.supervisor
   */
  export type user_parent$supervisorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supervisor
     */
    select?: supervisorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the supervisor
     */
    omit?: supervisorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: supervisorInclude<ExtArgs> | null
    where?: supervisorWhereInput
  }

  /**
   * user_parent without action
   */
  export type user_parentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user_parent
     */
    select?: user_parentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user_parent
     */
    omit?: user_parentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: user_parentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Course_of_studyScalarFieldEnum: {
    course_name: 'course_name',
    faculty_name: 'faculty_name'
  };

  export type Course_of_studyScalarFieldEnum = (typeof Course_of_studyScalarFieldEnum)[keyof typeof Course_of_studyScalarFieldEnum]


  export const FacultyScalarFieldEnum: {
    faculty_name: 'faculty_name'
  };

  export type FacultyScalarFieldEnum = (typeof FacultyScalarFieldEnum)[keyof typeof FacultyScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    student_id: 'student_id',
    course_of_study: 'course_of_study'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const Student_tagScalarFieldEnum: {
    tag_name: 'tag_name',
    student_id: 'student_id'
  };

  export type Student_tagScalarFieldEnum = (typeof Student_tagScalarFieldEnum)[keyof typeof Student_tagScalarFieldEnum]


  export const SupervisorScalarFieldEnum: {
    supervisor_id: 'supervisor_id',
    vita: 'vita',
    way_of_working: 'way_of_working',
    profile_tha: 'profile_tha'
  };

  export type SupervisorScalarFieldEnum = (typeof SupervisorScalarFieldEnum)[keyof typeof SupervisorScalarFieldEnum]


  export const TagScalarFieldEnum: {
    tag_name: 'tag_name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const Thesis_proposalScalarFieldEnum: {
    thesis_id: 'thesis_id',
    title: 'title',
    description: 'description',
    supervisor_id: 'supervisor_id',
    requirements: 'requirements',
    thesis_type: 'thesis_type',
    application_start: 'application_start',
    application_end: 'application_end',
    thesis_start: 'thesis_start',
    thesis_end: 'thesis_end'
  };

  export type Thesis_proposalScalarFieldEnum = (typeof Thesis_proposalScalarFieldEnum)[keyof typeof Thesis_proposalScalarFieldEnum]


  export const Thesis_proposal_tagScalarFieldEnum: {
    tag_name: 'tag_name',
    thesis_id: 'thesis_id'
  };

  export type Thesis_proposal_tagScalarFieldEnum = (typeof Thesis_proposal_tagScalarFieldEnum)[keyof typeof Thesis_proposal_tagScalarFieldEnum]


  export const User_parentScalarFieldEnum: {
    user_id: 'user_id',
    name: 'name',
    surname: 'surname',
    role: 'role',
    uni_email: 'uni_email',
    photo: 'photo',
    faculty_name: 'faculty_name',
    password_hash: 'password_hash',
    birthdate: 'birthdate',
    gender: 'gender',
    timespent: 'timespent',
    reg_date: 'reg_date'
  };

  export type User_parentScalarFieldEnum = (typeof User_parentScalarFieldEnum)[keyof typeof User_parentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type course_of_studyWhereInput = {
    AND?: course_of_studyWhereInput | course_of_studyWhereInput[]
    OR?: course_of_studyWhereInput[]
    NOT?: course_of_studyWhereInput | course_of_studyWhereInput[]
    course_name?: StringFilter<"course_of_study"> | string
    faculty_name?: StringFilter<"course_of_study"> | string
    faculty?: XOR<FacultyScalarRelationFilter, facultyWhereInput>
    student_student_course_of_studyTocourse_of_study?: StudentListRelationFilter
  }

  export type course_of_studyOrderByWithRelationInput = {
    course_name?: SortOrder
    faculty_name?: SortOrder
    faculty?: facultyOrderByWithRelationInput
    student_student_course_of_studyTocourse_of_study?: studentOrderByRelationAggregateInput
  }

  export type course_of_studyWhereUniqueInput = Prisma.AtLeast<{
    course_name?: string
    AND?: course_of_studyWhereInput | course_of_studyWhereInput[]
    OR?: course_of_studyWhereInput[]
    NOT?: course_of_studyWhereInput | course_of_studyWhereInput[]
    faculty_name?: StringFilter<"course_of_study"> | string
    faculty?: XOR<FacultyScalarRelationFilter, facultyWhereInput>
    student_student_course_of_studyTocourse_of_study?: StudentListRelationFilter
  }, "course_name">

  export type course_of_studyOrderByWithAggregationInput = {
    course_name?: SortOrder
    faculty_name?: SortOrder
    _count?: course_of_studyCountOrderByAggregateInput
    _max?: course_of_studyMaxOrderByAggregateInput
    _min?: course_of_studyMinOrderByAggregateInput
  }

  export type course_of_studyScalarWhereWithAggregatesInput = {
    AND?: course_of_studyScalarWhereWithAggregatesInput | course_of_studyScalarWhereWithAggregatesInput[]
    OR?: course_of_studyScalarWhereWithAggregatesInput[]
    NOT?: course_of_studyScalarWhereWithAggregatesInput | course_of_studyScalarWhereWithAggregatesInput[]
    course_name?: StringWithAggregatesFilter<"course_of_study"> | string
    faculty_name?: StringWithAggregatesFilter<"course_of_study"> | string
  }

  export type facultyWhereInput = {
    AND?: facultyWhereInput | facultyWhereInput[]
    OR?: facultyWhereInput[]
    NOT?: facultyWhereInput | facultyWhereInput[]
    faculty_name?: StringFilter<"faculty"> | string
    course_of_study?: Course_of_studyListRelationFilter
    user_parent?: User_parentListRelationFilter
  }

  export type facultyOrderByWithRelationInput = {
    faculty_name?: SortOrder
    course_of_study?: course_of_studyOrderByRelationAggregateInput
    user_parent?: user_parentOrderByRelationAggregateInput
  }

  export type facultyWhereUniqueInput = Prisma.AtLeast<{
    faculty_name?: string
    AND?: facultyWhereInput | facultyWhereInput[]
    OR?: facultyWhereInput[]
    NOT?: facultyWhereInput | facultyWhereInput[]
    course_of_study?: Course_of_studyListRelationFilter
    user_parent?: User_parentListRelationFilter
  }, "faculty_name">

  export type facultyOrderByWithAggregationInput = {
    faculty_name?: SortOrder
    _count?: facultyCountOrderByAggregateInput
    _max?: facultyMaxOrderByAggregateInput
    _min?: facultyMinOrderByAggregateInput
  }

  export type facultyScalarWhereWithAggregatesInput = {
    AND?: facultyScalarWhereWithAggregatesInput | facultyScalarWhereWithAggregatesInput[]
    OR?: facultyScalarWhereWithAggregatesInput[]
    NOT?: facultyScalarWhereWithAggregatesInput | facultyScalarWhereWithAggregatesInput[]
    faculty_name?: StringWithAggregatesFilter<"faculty"> | string
  }

  export type studentWhereInput = {
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    student_id?: IntFilter<"student"> | number
    course_of_study?: StringFilter<"student"> | string
    user_parent?: XOR<User_parentScalarRelationFilter, user_parentWhereInput>
    course_of_study_student_course_of_studyTocourse_of_study?: XOR<Course_of_studyScalarRelationFilter, course_of_studyWhereInput>
    student_tag?: Student_tagListRelationFilter
  }

  export type studentOrderByWithRelationInput = {
    student_id?: SortOrder
    course_of_study?: SortOrder
    user_parent?: user_parentOrderByWithRelationInput
    course_of_study_student_course_of_studyTocourse_of_study?: course_of_studyOrderByWithRelationInput
    student_tag?: student_tagOrderByRelationAggregateInput
  }

  export type studentWhereUniqueInput = Prisma.AtLeast<{
    student_id?: number
    AND?: studentWhereInput | studentWhereInput[]
    OR?: studentWhereInput[]
    NOT?: studentWhereInput | studentWhereInput[]
    course_of_study?: StringFilter<"student"> | string
    user_parent?: XOR<User_parentScalarRelationFilter, user_parentWhereInput>
    course_of_study_student_course_of_studyTocourse_of_study?: XOR<Course_of_studyScalarRelationFilter, course_of_studyWhereInput>
    student_tag?: Student_tagListRelationFilter
  }, "student_id">

  export type studentOrderByWithAggregationInput = {
    student_id?: SortOrder
    course_of_study?: SortOrder
    _count?: studentCountOrderByAggregateInput
    _avg?: studentAvgOrderByAggregateInput
    _max?: studentMaxOrderByAggregateInput
    _min?: studentMinOrderByAggregateInput
    _sum?: studentSumOrderByAggregateInput
  }

  export type studentScalarWhereWithAggregatesInput = {
    AND?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    OR?: studentScalarWhereWithAggregatesInput[]
    NOT?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[]
    student_id?: IntWithAggregatesFilter<"student"> | number
    course_of_study?: StringWithAggregatesFilter<"student"> | string
  }

  export type student_tagWhereInput = {
    AND?: student_tagWhereInput | student_tagWhereInput[]
    OR?: student_tagWhereInput[]
    NOT?: student_tagWhereInput | student_tagWhereInput[]
    tag_name?: StringFilter<"student_tag"> | string
    student_id?: IntFilter<"student_tag"> | number
    tag?: XOR<TagScalarRelationFilter, tagWhereInput>
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }

  export type student_tagOrderByWithRelationInput = {
    tag_name?: SortOrder
    student_id?: SortOrder
    tag?: tagOrderByWithRelationInput
    student?: studentOrderByWithRelationInput
  }

  export type student_tagWhereUniqueInput = Prisma.AtLeast<{
    tag_name_student_id?: student_tagTag_nameStudent_idCompoundUniqueInput
    AND?: student_tagWhereInput | student_tagWhereInput[]
    OR?: student_tagWhereInput[]
    NOT?: student_tagWhereInput | student_tagWhereInput[]
    tag_name?: StringFilter<"student_tag"> | string
    student_id?: IntFilter<"student_tag"> | number
    tag?: XOR<TagScalarRelationFilter, tagWhereInput>
    student?: XOR<StudentScalarRelationFilter, studentWhereInput>
  }, "tag_name_student_id">

  export type student_tagOrderByWithAggregationInput = {
    tag_name?: SortOrder
    student_id?: SortOrder
    _count?: student_tagCountOrderByAggregateInput
    _avg?: student_tagAvgOrderByAggregateInput
    _max?: student_tagMaxOrderByAggregateInput
    _min?: student_tagMinOrderByAggregateInput
    _sum?: student_tagSumOrderByAggregateInput
  }

  export type student_tagScalarWhereWithAggregatesInput = {
    AND?: student_tagScalarWhereWithAggregatesInput | student_tagScalarWhereWithAggregatesInput[]
    OR?: student_tagScalarWhereWithAggregatesInput[]
    NOT?: student_tagScalarWhereWithAggregatesInput | student_tagScalarWhereWithAggregatesInput[]
    tag_name?: StringWithAggregatesFilter<"student_tag"> | string
    student_id?: IntWithAggregatesFilter<"student_tag"> | number
  }

  export type supervisorWhereInput = {
    AND?: supervisorWhereInput | supervisorWhereInput[]
    OR?: supervisorWhereInput[]
    NOT?: supervisorWhereInput | supervisorWhereInput[]
    supervisor_id?: IntFilter<"supervisor"> | number
    vita?: StringNullableFilter<"supervisor"> | string | null
    way_of_working?: StringNullableFilter<"supervisor"> | string | null
    profile_tha?: StringNullableFilter<"supervisor"> | string | null
    user_parent?: XOR<User_parentScalarRelationFilter, user_parentWhereInput>
    thesis_proposal?: Thesis_proposalListRelationFilter
  }

  export type supervisorOrderByWithRelationInput = {
    supervisor_id?: SortOrder
    vita?: SortOrderInput | SortOrder
    way_of_working?: SortOrderInput | SortOrder
    profile_tha?: SortOrderInput | SortOrder
    user_parent?: user_parentOrderByWithRelationInput
    thesis_proposal?: thesis_proposalOrderByRelationAggregateInput
  }

  export type supervisorWhereUniqueInput = Prisma.AtLeast<{
    supervisor_id?: number
    AND?: supervisorWhereInput | supervisorWhereInput[]
    OR?: supervisorWhereInput[]
    NOT?: supervisorWhereInput | supervisorWhereInput[]
    vita?: StringNullableFilter<"supervisor"> | string | null
    way_of_working?: StringNullableFilter<"supervisor"> | string | null
    profile_tha?: StringNullableFilter<"supervisor"> | string | null
    user_parent?: XOR<User_parentScalarRelationFilter, user_parentWhereInput>
    thesis_proposal?: Thesis_proposalListRelationFilter
  }, "supervisor_id">

  export type supervisorOrderByWithAggregationInput = {
    supervisor_id?: SortOrder
    vita?: SortOrderInput | SortOrder
    way_of_working?: SortOrderInput | SortOrder
    profile_tha?: SortOrderInput | SortOrder
    _count?: supervisorCountOrderByAggregateInput
    _avg?: supervisorAvgOrderByAggregateInput
    _max?: supervisorMaxOrderByAggregateInput
    _min?: supervisorMinOrderByAggregateInput
    _sum?: supervisorSumOrderByAggregateInput
  }

  export type supervisorScalarWhereWithAggregatesInput = {
    AND?: supervisorScalarWhereWithAggregatesInput | supervisorScalarWhereWithAggregatesInput[]
    OR?: supervisorScalarWhereWithAggregatesInput[]
    NOT?: supervisorScalarWhereWithAggregatesInput | supervisorScalarWhereWithAggregatesInput[]
    supervisor_id?: IntWithAggregatesFilter<"supervisor"> | number
    vita?: StringNullableWithAggregatesFilter<"supervisor"> | string | null
    way_of_working?: StringNullableWithAggregatesFilter<"supervisor"> | string | null
    profile_tha?: StringNullableWithAggregatesFilter<"supervisor"> | string | null
  }

  export type tagWhereInput = {
    AND?: tagWhereInput | tagWhereInput[]
    OR?: tagWhereInput[]
    NOT?: tagWhereInput | tagWhereInput[]
    tag_name?: StringFilter<"tag"> | string
    student_tag?: Student_tagListRelationFilter
    thesis_proposal_tag?: Thesis_proposal_tagListRelationFilter
  }

  export type tagOrderByWithRelationInput = {
    tag_name?: SortOrder
    student_tag?: student_tagOrderByRelationAggregateInput
    thesis_proposal_tag?: thesis_proposal_tagOrderByRelationAggregateInput
  }

  export type tagWhereUniqueInput = Prisma.AtLeast<{
    tag_name?: string
    AND?: tagWhereInput | tagWhereInput[]
    OR?: tagWhereInput[]
    NOT?: tagWhereInput | tagWhereInput[]
    student_tag?: Student_tagListRelationFilter
    thesis_proposal_tag?: Thesis_proposal_tagListRelationFilter
  }, "tag_name">

  export type tagOrderByWithAggregationInput = {
    tag_name?: SortOrder
    _count?: tagCountOrderByAggregateInput
    _max?: tagMaxOrderByAggregateInput
    _min?: tagMinOrderByAggregateInput
  }

  export type tagScalarWhereWithAggregatesInput = {
    AND?: tagScalarWhereWithAggregatesInput | tagScalarWhereWithAggregatesInput[]
    OR?: tagScalarWhereWithAggregatesInput[]
    NOT?: tagScalarWhereWithAggregatesInput | tagScalarWhereWithAggregatesInput[]
    tag_name?: StringWithAggregatesFilter<"tag"> | string
  }

  export type thesis_proposalWhereInput = {
    AND?: thesis_proposalWhereInput | thesis_proposalWhereInput[]
    OR?: thesis_proposalWhereInput[]
    NOT?: thesis_proposalWhereInput | thesis_proposalWhereInput[]
    thesis_id?: IntFilter<"thesis_proposal"> | number
    title?: StringFilter<"thesis_proposal"> | string
    description?: StringFilter<"thesis_proposal"> | string
    supervisor_id?: IntFilter<"thesis_proposal"> | number
    requirements?: StringNullableFilter<"thesis_proposal"> | string | null
    thesis_type?: StringFilter<"thesis_proposal"> | string
    application_start?: DateTimeNullableFilter<"thesis_proposal"> | Date | string | null
    application_end?: DateTimeNullableFilter<"thesis_proposal"> | Date | string | null
    thesis_start?: DateTimeNullableFilter<"thesis_proposal"> | Date | string | null
    thesis_end?: DateTimeNullableFilter<"thesis_proposal"> | Date | string | null
    supervisor?: XOR<SupervisorScalarRelationFilter, supervisorWhereInput>
    thesis_proposal_tag?: Thesis_proposal_tagListRelationFilter
  }

  export type thesis_proposalOrderByWithRelationInput = {
    thesis_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    supervisor_id?: SortOrder
    requirements?: SortOrderInput | SortOrder
    thesis_type?: SortOrder
    application_start?: SortOrderInput | SortOrder
    application_end?: SortOrderInput | SortOrder
    thesis_start?: SortOrderInput | SortOrder
    thesis_end?: SortOrderInput | SortOrder
    supervisor?: supervisorOrderByWithRelationInput
    thesis_proposal_tag?: thesis_proposal_tagOrderByRelationAggregateInput
  }

  export type thesis_proposalWhereUniqueInput = Prisma.AtLeast<{
    thesis_id?: number
    AND?: thesis_proposalWhereInput | thesis_proposalWhereInput[]
    OR?: thesis_proposalWhereInput[]
    NOT?: thesis_proposalWhereInput | thesis_proposalWhereInput[]
    title?: StringFilter<"thesis_proposal"> | string
    description?: StringFilter<"thesis_proposal"> | string
    supervisor_id?: IntFilter<"thesis_proposal"> | number
    requirements?: StringNullableFilter<"thesis_proposal"> | string | null
    thesis_type?: StringFilter<"thesis_proposal"> | string
    application_start?: DateTimeNullableFilter<"thesis_proposal"> | Date | string | null
    application_end?: DateTimeNullableFilter<"thesis_proposal"> | Date | string | null
    thesis_start?: DateTimeNullableFilter<"thesis_proposal"> | Date | string | null
    thesis_end?: DateTimeNullableFilter<"thesis_proposal"> | Date | string | null
    supervisor?: XOR<SupervisorScalarRelationFilter, supervisorWhereInput>
    thesis_proposal_tag?: Thesis_proposal_tagListRelationFilter
  }, "thesis_id">

  export type thesis_proposalOrderByWithAggregationInput = {
    thesis_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    supervisor_id?: SortOrder
    requirements?: SortOrderInput | SortOrder
    thesis_type?: SortOrder
    application_start?: SortOrderInput | SortOrder
    application_end?: SortOrderInput | SortOrder
    thesis_start?: SortOrderInput | SortOrder
    thesis_end?: SortOrderInput | SortOrder
    _count?: thesis_proposalCountOrderByAggregateInput
    _avg?: thesis_proposalAvgOrderByAggregateInput
    _max?: thesis_proposalMaxOrderByAggregateInput
    _min?: thesis_proposalMinOrderByAggregateInput
    _sum?: thesis_proposalSumOrderByAggregateInput
  }

  export type thesis_proposalScalarWhereWithAggregatesInput = {
    AND?: thesis_proposalScalarWhereWithAggregatesInput | thesis_proposalScalarWhereWithAggregatesInput[]
    OR?: thesis_proposalScalarWhereWithAggregatesInput[]
    NOT?: thesis_proposalScalarWhereWithAggregatesInput | thesis_proposalScalarWhereWithAggregatesInput[]
    thesis_id?: IntWithAggregatesFilter<"thesis_proposal"> | number
    title?: StringWithAggregatesFilter<"thesis_proposal"> | string
    description?: StringWithAggregatesFilter<"thesis_proposal"> | string
    supervisor_id?: IntWithAggregatesFilter<"thesis_proposal"> | number
    requirements?: StringNullableWithAggregatesFilter<"thesis_proposal"> | string | null
    thesis_type?: StringWithAggregatesFilter<"thesis_proposal"> | string
    application_start?: DateTimeNullableWithAggregatesFilter<"thesis_proposal"> | Date | string | null
    application_end?: DateTimeNullableWithAggregatesFilter<"thesis_proposal"> | Date | string | null
    thesis_start?: DateTimeNullableWithAggregatesFilter<"thesis_proposal"> | Date | string | null
    thesis_end?: DateTimeNullableWithAggregatesFilter<"thesis_proposal"> | Date | string | null
  }

  export type thesis_proposal_tagWhereInput = {
    AND?: thesis_proposal_tagWhereInput | thesis_proposal_tagWhereInput[]
    OR?: thesis_proposal_tagWhereInput[]
    NOT?: thesis_proposal_tagWhereInput | thesis_proposal_tagWhereInput[]
    tag_name?: StringFilter<"thesis_proposal_tag"> | string
    thesis_id?: IntFilter<"thesis_proposal_tag"> | number
    tag?: XOR<TagScalarRelationFilter, tagWhereInput>
    thesis_proposal?: XOR<Thesis_proposalScalarRelationFilter, thesis_proposalWhereInput>
  }

  export type thesis_proposal_tagOrderByWithRelationInput = {
    tag_name?: SortOrder
    thesis_id?: SortOrder
    tag?: tagOrderByWithRelationInput
    thesis_proposal?: thesis_proposalOrderByWithRelationInput
  }

  export type thesis_proposal_tagWhereUniqueInput = Prisma.AtLeast<{
    tag_name_thesis_id?: thesis_proposal_tagTag_nameThesis_idCompoundUniqueInput
    AND?: thesis_proposal_tagWhereInput | thesis_proposal_tagWhereInput[]
    OR?: thesis_proposal_tagWhereInput[]
    NOT?: thesis_proposal_tagWhereInput | thesis_proposal_tagWhereInput[]
    tag_name?: StringFilter<"thesis_proposal_tag"> | string
    thesis_id?: IntFilter<"thesis_proposal_tag"> | number
    tag?: XOR<TagScalarRelationFilter, tagWhereInput>
    thesis_proposal?: XOR<Thesis_proposalScalarRelationFilter, thesis_proposalWhereInput>
  }, "tag_name_thesis_id">

  export type thesis_proposal_tagOrderByWithAggregationInput = {
    tag_name?: SortOrder
    thesis_id?: SortOrder
    _count?: thesis_proposal_tagCountOrderByAggregateInput
    _avg?: thesis_proposal_tagAvgOrderByAggregateInput
    _max?: thesis_proposal_tagMaxOrderByAggregateInput
    _min?: thesis_proposal_tagMinOrderByAggregateInput
    _sum?: thesis_proposal_tagSumOrderByAggregateInput
  }

  export type thesis_proposal_tagScalarWhereWithAggregatesInput = {
    AND?: thesis_proposal_tagScalarWhereWithAggregatesInput | thesis_proposal_tagScalarWhereWithAggregatesInput[]
    OR?: thesis_proposal_tagScalarWhereWithAggregatesInput[]
    NOT?: thesis_proposal_tagScalarWhereWithAggregatesInput | thesis_proposal_tagScalarWhereWithAggregatesInput[]
    tag_name?: StringWithAggregatesFilter<"thesis_proposal_tag"> | string
    thesis_id?: IntWithAggregatesFilter<"thesis_proposal_tag"> | number
  }

  export type user_parentWhereInput = {
    AND?: user_parentWhereInput | user_parentWhereInput[]
    OR?: user_parentWhereInput[]
    NOT?: user_parentWhereInput | user_parentWhereInput[]
    user_id?: IntFilter<"user_parent"> | number
    name?: StringFilter<"user_parent"> | string
    surname?: StringFilter<"user_parent"> | string
    role?: StringFilter<"user_parent"> | string
    uni_email?: StringFilter<"user_parent"> | string
    photo?: BytesNullableFilter<"user_parent"> | Uint8Array | null
    faculty_name?: StringFilter<"user_parent"> | string
    password_hash?: StringFilter<"user_parent"> | string
    birthdate?: DateTimeNullableFilter<"user_parent"> | Date | string | null
    gender?: StringNullableFilter<"user_parent"> | string | null
    timespent?: BigIntFilter<"user_parent"> | bigint | number
    reg_date?: DateTimeFilter<"user_parent"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, studentWhereInput> | null
    supervisor?: XOR<SupervisorNullableScalarRelationFilter, supervisorWhereInput> | null
    faculty?: XOR<FacultyScalarRelationFilter, facultyWhereInput>
  }

  export type user_parentOrderByWithRelationInput = {
    user_id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    role?: SortOrder
    uni_email?: SortOrder
    photo?: SortOrderInput | SortOrder
    faculty_name?: SortOrder
    password_hash?: SortOrder
    birthdate?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    timespent?: SortOrder
    reg_date?: SortOrder
    student?: studentOrderByWithRelationInput
    supervisor?: supervisorOrderByWithRelationInput
    faculty?: facultyOrderByWithRelationInput
  }

  export type user_parentWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    AND?: user_parentWhereInput | user_parentWhereInput[]
    OR?: user_parentWhereInput[]
    NOT?: user_parentWhereInput | user_parentWhereInput[]
    name?: StringFilter<"user_parent"> | string
    surname?: StringFilter<"user_parent"> | string
    role?: StringFilter<"user_parent"> | string
    uni_email?: StringFilter<"user_parent"> | string
    photo?: BytesNullableFilter<"user_parent"> | Uint8Array | null
    faculty_name?: StringFilter<"user_parent"> | string
    password_hash?: StringFilter<"user_parent"> | string
    birthdate?: DateTimeNullableFilter<"user_parent"> | Date | string | null
    gender?: StringNullableFilter<"user_parent"> | string | null
    timespent?: BigIntFilter<"user_parent"> | bigint | number
    reg_date?: DateTimeFilter<"user_parent"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, studentWhereInput> | null
    supervisor?: XOR<SupervisorNullableScalarRelationFilter, supervisorWhereInput> | null
    faculty?: XOR<FacultyScalarRelationFilter, facultyWhereInput>
  }, "user_id">

  export type user_parentOrderByWithAggregationInput = {
    user_id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    role?: SortOrder
    uni_email?: SortOrder
    photo?: SortOrderInput | SortOrder
    faculty_name?: SortOrder
    password_hash?: SortOrder
    birthdate?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    timespent?: SortOrder
    reg_date?: SortOrder
    _count?: user_parentCountOrderByAggregateInput
    _avg?: user_parentAvgOrderByAggregateInput
    _max?: user_parentMaxOrderByAggregateInput
    _min?: user_parentMinOrderByAggregateInput
    _sum?: user_parentSumOrderByAggregateInput
  }

  export type user_parentScalarWhereWithAggregatesInput = {
    AND?: user_parentScalarWhereWithAggregatesInput | user_parentScalarWhereWithAggregatesInput[]
    OR?: user_parentScalarWhereWithAggregatesInput[]
    NOT?: user_parentScalarWhereWithAggregatesInput | user_parentScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"user_parent"> | number
    name?: StringWithAggregatesFilter<"user_parent"> | string
    surname?: StringWithAggregatesFilter<"user_parent"> | string
    role?: StringWithAggregatesFilter<"user_parent"> | string
    uni_email?: StringWithAggregatesFilter<"user_parent"> | string
    photo?: BytesNullableWithAggregatesFilter<"user_parent"> | Uint8Array | null
    faculty_name?: StringWithAggregatesFilter<"user_parent"> | string
    password_hash?: StringWithAggregatesFilter<"user_parent"> | string
    birthdate?: DateTimeNullableWithAggregatesFilter<"user_parent"> | Date | string | null
    gender?: StringNullableWithAggregatesFilter<"user_parent"> | string | null
    timespent?: BigIntWithAggregatesFilter<"user_parent"> | bigint | number
    reg_date?: DateTimeWithAggregatesFilter<"user_parent"> | Date | string
  }

  export type course_of_studyCreateInput = {
    course_name: string
    faculty: facultyCreateNestedOneWithoutCourse_of_studyInput
    student_student_course_of_studyTocourse_of_study?: studentCreateNestedManyWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput
  }

  export type course_of_studyUncheckedCreateInput = {
    course_name: string
    faculty_name: string
    student_student_course_of_studyTocourse_of_study?: studentUncheckedCreateNestedManyWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput
  }

  export type course_of_studyUpdateInput = {
    course_name?: StringFieldUpdateOperationsInput | string
    faculty?: facultyUpdateOneRequiredWithoutCourse_of_studyNestedInput
    student_student_course_of_studyTocourse_of_study?: studentUpdateManyWithoutCourse_of_study_student_course_of_studyTocourse_of_studyNestedInput
  }

  export type course_of_studyUncheckedUpdateInput = {
    course_name?: StringFieldUpdateOperationsInput | string
    faculty_name?: StringFieldUpdateOperationsInput | string
    student_student_course_of_studyTocourse_of_study?: studentUncheckedUpdateManyWithoutCourse_of_study_student_course_of_studyTocourse_of_studyNestedInput
  }

  export type course_of_studyCreateManyInput = {
    course_name: string
    faculty_name: string
  }

  export type course_of_studyUpdateManyMutationInput = {
    course_name?: StringFieldUpdateOperationsInput | string
  }

  export type course_of_studyUncheckedUpdateManyInput = {
    course_name?: StringFieldUpdateOperationsInput | string
    faculty_name?: StringFieldUpdateOperationsInput | string
  }

  export type facultyCreateInput = {
    faculty_name: string
    course_of_study?: course_of_studyCreateNestedManyWithoutFacultyInput
    user_parent?: user_parentCreateNestedManyWithoutFacultyInput
  }

  export type facultyUncheckedCreateInput = {
    faculty_name: string
    course_of_study?: course_of_studyUncheckedCreateNestedManyWithoutFacultyInput
    user_parent?: user_parentUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type facultyUpdateInput = {
    faculty_name?: StringFieldUpdateOperationsInput | string
    course_of_study?: course_of_studyUpdateManyWithoutFacultyNestedInput
    user_parent?: user_parentUpdateManyWithoutFacultyNestedInput
  }

  export type facultyUncheckedUpdateInput = {
    faculty_name?: StringFieldUpdateOperationsInput | string
    course_of_study?: course_of_studyUncheckedUpdateManyWithoutFacultyNestedInput
    user_parent?: user_parentUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type facultyCreateManyInput = {
    faculty_name: string
  }

  export type facultyUpdateManyMutationInput = {
    faculty_name?: StringFieldUpdateOperationsInput | string
  }

  export type facultyUncheckedUpdateManyInput = {
    faculty_name?: StringFieldUpdateOperationsInput | string
  }

  export type studentCreateInput = {
    user_parent: user_parentCreateNestedOneWithoutStudentInput
    course_of_study_student_course_of_studyTocourse_of_study: course_of_studyCreateNestedOneWithoutStudent_student_course_of_studyTocourse_of_studyInput
    student_tag?: student_tagCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateInput = {
    student_id: number
    course_of_study: string
    student_tag?: student_tagUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentUpdateInput = {
    user_parent?: user_parentUpdateOneRequiredWithoutStudentNestedInput
    course_of_study_student_course_of_studyTocourse_of_study?: course_of_studyUpdateOneRequiredWithoutStudent_student_course_of_studyTocourse_of_studyNestedInput
    student_tag?: student_tagUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    course_of_study?: StringFieldUpdateOperationsInput | string
    student_tag?: student_tagUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentCreateManyInput = {
    student_id: number
    course_of_study: string
  }

  export type studentUpdateManyMutationInput = {

  }

  export type studentUncheckedUpdateManyInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    course_of_study?: StringFieldUpdateOperationsInput | string
  }

  export type student_tagCreateInput = {
    tag: tagCreateNestedOneWithoutStudent_tagInput
    student: studentCreateNestedOneWithoutStudent_tagInput
  }

  export type student_tagUncheckedCreateInput = {
    tag_name: string
    student_id: number
  }

  export type student_tagUpdateInput = {
    tag?: tagUpdateOneRequiredWithoutStudent_tagNestedInput
    student?: studentUpdateOneRequiredWithoutStudent_tagNestedInput
  }

  export type student_tagUncheckedUpdateInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    student_id?: IntFieldUpdateOperationsInput | number
  }

  export type student_tagCreateManyInput = {
    tag_name: string
    student_id: number
  }

  export type student_tagUpdateManyMutationInput = {

  }

  export type student_tagUncheckedUpdateManyInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    student_id?: IntFieldUpdateOperationsInput | number
  }

  export type supervisorCreateInput = {
    vita?: string | null
    way_of_working?: string | null
    profile_tha?: string | null
    user_parent: user_parentCreateNestedOneWithoutSupervisorInput
    thesis_proposal?: thesis_proposalCreateNestedManyWithoutSupervisorInput
  }

  export type supervisorUncheckedCreateInput = {
    supervisor_id: number
    vita?: string | null
    way_of_working?: string | null
    profile_tha?: string | null
    thesis_proposal?: thesis_proposalUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type supervisorUpdateInput = {
    vita?: NullableStringFieldUpdateOperationsInput | string | null
    way_of_working?: NullableStringFieldUpdateOperationsInput | string | null
    profile_tha?: NullableStringFieldUpdateOperationsInput | string | null
    user_parent?: user_parentUpdateOneRequiredWithoutSupervisorNestedInput
    thesis_proposal?: thesis_proposalUpdateManyWithoutSupervisorNestedInput
  }

  export type supervisorUncheckedUpdateInput = {
    supervisor_id?: IntFieldUpdateOperationsInput | number
    vita?: NullableStringFieldUpdateOperationsInput | string | null
    way_of_working?: NullableStringFieldUpdateOperationsInput | string | null
    profile_tha?: NullableStringFieldUpdateOperationsInput | string | null
    thesis_proposal?: thesis_proposalUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type supervisorCreateManyInput = {
    supervisor_id: number
    vita?: string | null
    way_of_working?: string | null
    profile_tha?: string | null
  }

  export type supervisorUpdateManyMutationInput = {
    vita?: NullableStringFieldUpdateOperationsInput | string | null
    way_of_working?: NullableStringFieldUpdateOperationsInput | string | null
    profile_tha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type supervisorUncheckedUpdateManyInput = {
    supervisor_id?: IntFieldUpdateOperationsInput | number
    vita?: NullableStringFieldUpdateOperationsInput | string | null
    way_of_working?: NullableStringFieldUpdateOperationsInput | string | null
    profile_tha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tagCreateInput = {
    tag_name: string
    student_tag?: student_tagCreateNestedManyWithoutTagInput
    thesis_proposal_tag?: thesis_proposal_tagCreateNestedManyWithoutTagInput
  }

  export type tagUncheckedCreateInput = {
    tag_name: string
    student_tag?: student_tagUncheckedCreateNestedManyWithoutTagInput
    thesis_proposal_tag?: thesis_proposal_tagUncheckedCreateNestedManyWithoutTagInput
  }

  export type tagUpdateInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    student_tag?: student_tagUpdateManyWithoutTagNestedInput
    thesis_proposal_tag?: thesis_proposal_tagUpdateManyWithoutTagNestedInput
  }

  export type tagUncheckedUpdateInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    student_tag?: student_tagUncheckedUpdateManyWithoutTagNestedInput
    thesis_proposal_tag?: thesis_proposal_tagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type tagCreateManyInput = {
    tag_name: string
  }

  export type tagUpdateManyMutationInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
  }

  export type tagUncheckedUpdateManyInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
  }

  export type thesis_proposalCreateInput = {
    title: string
    description: string
    requirements?: string | null
    thesis_type: string
    application_start?: Date | string | null
    application_end?: Date | string | null
    thesis_start?: Date | string | null
    thesis_end?: Date | string | null
    supervisor: supervisorCreateNestedOneWithoutThesis_proposalInput
    thesis_proposal_tag?: thesis_proposal_tagCreateNestedManyWithoutThesis_proposalInput
  }

  export type thesis_proposalUncheckedCreateInput = {
    thesis_id?: number
    title: string
    description: string
    supervisor_id: number
    requirements?: string | null
    thesis_type: string
    application_start?: Date | string | null
    application_end?: Date | string | null
    thesis_start?: Date | string | null
    thesis_end?: Date | string | null
    thesis_proposal_tag?: thesis_proposal_tagUncheckedCreateNestedManyWithoutThesis_proposalInput
  }

  export type thesis_proposalUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    thesis_type?: StringFieldUpdateOperationsInput | string
    application_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    application_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supervisor?: supervisorUpdateOneRequiredWithoutThesis_proposalNestedInput
    thesis_proposal_tag?: thesis_proposal_tagUpdateManyWithoutThesis_proposalNestedInput
  }

  export type thesis_proposalUncheckedUpdateInput = {
    thesis_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    supervisor_id?: IntFieldUpdateOperationsInput | number
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    thesis_type?: StringFieldUpdateOperationsInput | string
    application_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    application_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_proposal_tag?: thesis_proposal_tagUncheckedUpdateManyWithoutThesis_proposalNestedInput
  }

  export type thesis_proposalCreateManyInput = {
    thesis_id?: number
    title: string
    description: string
    supervisor_id: number
    requirements?: string | null
    thesis_type: string
    application_start?: Date | string | null
    application_end?: Date | string | null
    thesis_start?: Date | string | null
    thesis_end?: Date | string | null
  }

  export type thesis_proposalUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    thesis_type?: StringFieldUpdateOperationsInput | string
    application_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    application_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type thesis_proposalUncheckedUpdateManyInput = {
    thesis_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    supervisor_id?: IntFieldUpdateOperationsInput | number
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    thesis_type?: StringFieldUpdateOperationsInput | string
    application_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    application_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type thesis_proposal_tagCreateInput = {
    tag: tagCreateNestedOneWithoutThesis_proposal_tagInput
    thesis_proposal: thesis_proposalCreateNestedOneWithoutThesis_proposal_tagInput
  }

  export type thesis_proposal_tagUncheckedCreateInput = {
    tag_name: string
    thesis_id: number
  }

  export type thesis_proposal_tagUpdateInput = {
    tag?: tagUpdateOneRequiredWithoutThesis_proposal_tagNestedInput
    thesis_proposal?: thesis_proposalUpdateOneRequiredWithoutThesis_proposal_tagNestedInput
  }

  export type thesis_proposal_tagUncheckedUpdateInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    thesis_id?: IntFieldUpdateOperationsInput | number
  }

  export type thesis_proposal_tagCreateManyInput = {
    tag_name: string
    thesis_id: number
  }

  export type thesis_proposal_tagUpdateManyMutationInput = {

  }

  export type thesis_proposal_tagUncheckedUpdateManyInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    thesis_id?: IntFieldUpdateOperationsInput | number
  }

  export type user_parentCreateInput = {
    name: string
    surname: string
    role: string
    uni_email: string
    photo?: Uint8Array | null
    password_hash: string
    birthdate?: Date | string | null
    gender?: string | null
    timespent: bigint | number
    reg_date: Date | string
    student?: studentCreateNestedOneWithoutUser_parentInput
    supervisor?: supervisorCreateNestedOneWithoutUser_parentInput
    faculty: facultyCreateNestedOneWithoutUser_parentInput
  }

  export type user_parentUncheckedCreateInput = {
    user_id?: number
    name: string
    surname: string
    role: string
    uni_email: string
    photo?: Uint8Array | null
    faculty_name: string
    password_hash: string
    birthdate?: Date | string | null
    gender?: string | null
    timespent: bigint | number
    reg_date: Date | string
    student?: studentUncheckedCreateNestedOneWithoutUser_parentInput
    supervisor?: supervisorUncheckedCreateNestedOneWithoutUser_parentInput
  }

  export type user_parentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    uni_email?: StringFieldUpdateOperationsInput | string
    photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    password_hash?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: BigIntFieldUpdateOperationsInput | bigint | number
    reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: studentUpdateOneWithoutUser_parentNestedInput
    supervisor?: supervisorUpdateOneWithoutUser_parentNestedInput
    faculty?: facultyUpdateOneRequiredWithoutUser_parentNestedInput
  }

  export type user_parentUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    uni_email?: StringFieldUpdateOperationsInput | string
    photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    faculty_name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: BigIntFieldUpdateOperationsInput | bigint | number
    reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: studentUncheckedUpdateOneWithoutUser_parentNestedInput
    supervisor?: supervisorUncheckedUpdateOneWithoutUser_parentNestedInput
  }

  export type user_parentCreateManyInput = {
    user_id?: number
    name: string
    surname: string
    role: string
    uni_email: string
    photo?: Uint8Array | null
    faculty_name: string
    password_hash: string
    birthdate?: Date | string | null
    gender?: string | null
    timespent: bigint | number
    reg_date: Date | string
  }

  export type user_parentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    uni_email?: StringFieldUpdateOperationsInput | string
    photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    password_hash?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: BigIntFieldUpdateOperationsInput | bigint | number
    reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type user_parentUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    uni_email?: StringFieldUpdateOperationsInput | string
    photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    faculty_name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: BigIntFieldUpdateOperationsInput | bigint | number
    reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FacultyScalarRelationFilter = {
    is?: facultyWhereInput
    isNot?: facultyWhereInput
  }

  export type StudentListRelationFilter = {
    every?: studentWhereInput
    some?: studentWhereInput
    none?: studentWhereInput
  }

  export type studentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type course_of_studyCountOrderByAggregateInput = {
    course_name?: SortOrder
    faculty_name?: SortOrder
  }

  export type course_of_studyMaxOrderByAggregateInput = {
    course_name?: SortOrder
    faculty_name?: SortOrder
  }

  export type course_of_studyMinOrderByAggregateInput = {
    course_name?: SortOrder
    faculty_name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Course_of_studyListRelationFilter = {
    every?: course_of_studyWhereInput
    some?: course_of_studyWhereInput
    none?: course_of_studyWhereInput
  }

  export type User_parentListRelationFilter = {
    every?: user_parentWhereInput
    some?: user_parentWhereInput
    none?: user_parentWhereInput
  }

  export type course_of_studyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type user_parentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type facultyCountOrderByAggregateInput = {
    faculty_name?: SortOrder
  }

  export type facultyMaxOrderByAggregateInput = {
    faculty_name?: SortOrder
  }

  export type facultyMinOrderByAggregateInput = {
    faculty_name?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type User_parentScalarRelationFilter = {
    is?: user_parentWhereInput
    isNot?: user_parentWhereInput
  }

  export type Course_of_studyScalarRelationFilter = {
    is?: course_of_studyWhereInput
    isNot?: course_of_studyWhereInput
  }

  export type Student_tagListRelationFilter = {
    every?: student_tagWhereInput
    some?: student_tagWhereInput
    none?: student_tagWhereInput
  }

  export type student_tagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type studentCountOrderByAggregateInput = {
    student_id?: SortOrder
    course_of_study?: SortOrder
  }

  export type studentAvgOrderByAggregateInput = {
    student_id?: SortOrder
  }

  export type studentMaxOrderByAggregateInput = {
    student_id?: SortOrder
    course_of_study?: SortOrder
  }

  export type studentMinOrderByAggregateInput = {
    student_id?: SortOrder
    course_of_study?: SortOrder
  }

  export type studentSumOrderByAggregateInput = {
    student_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TagScalarRelationFilter = {
    is?: tagWhereInput
    isNot?: tagWhereInput
  }

  export type StudentScalarRelationFilter = {
    is?: studentWhereInput
    isNot?: studentWhereInput
  }

  export type student_tagTag_nameStudent_idCompoundUniqueInput = {
    tag_name: string
    student_id: number
  }

  export type student_tagCountOrderByAggregateInput = {
    tag_name?: SortOrder
    student_id?: SortOrder
  }

  export type student_tagAvgOrderByAggregateInput = {
    student_id?: SortOrder
  }

  export type student_tagMaxOrderByAggregateInput = {
    tag_name?: SortOrder
    student_id?: SortOrder
  }

  export type student_tagMinOrderByAggregateInput = {
    tag_name?: SortOrder
    student_id?: SortOrder
  }

  export type student_tagSumOrderByAggregateInput = {
    student_id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Thesis_proposalListRelationFilter = {
    every?: thesis_proposalWhereInput
    some?: thesis_proposalWhereInput
    none?: thesis_proposalWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type thesis_proposalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type supervisorCountOrderByAggregateInput = {
    supervisor_id?: SortOrder
    vita?: SortOrder
    way_of_working?: SortOrder
    profile_tha?: SortOrder
  }

  export type supervisorAvgOrderByAggregateInput = {
    supervisor_id?: SortOrder
  }

  export type supervisorMaxOrderByAggregateInput = {
    supervisor_id?: SortOrder
    vita?: SortOrder
    way_of_working?: SortOrder
    profile_tha?: SortOrder
  }

  export type supervisorMinOrderByAggregateInput = {
    supervisor_id?: SortOrder
    vita?: SortOrder
    way_of_working?: SortOrder
    profile_tha?: SortOrder
  }

  export type supervisorSumOrderByAggregateInput = {
    supervisor_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Thesis_proposal_tagListRelationFilter = {
    every?: thesis_proposal_tagWhereInput
    some?: thesis_proposal_tagWhereInput
    none?: thesis_proposal_tagWhereInput
  }

  export type thesis_proposal_tagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tagCountOrderByAggregateInput = {
    tag_name?: SortOrder
  }

  export type tagMaxOrderByAggregateInput = {
    tag_name?: SortOrder
  }

  export type tagMinOrderByAggregateInput = {
    tag_name?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SupervisorScalarRelationFilter = {
    is?: supervisorWhereInput
    isNot?: supervisorWhereInput
  }

  export type thesis_proposalCountOrderByAggregateInput = {
    thesis_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    supervisor_id?: SortOrder
    requirements?: SortOrder
    thesis_type?: SortOrder
    application_start?: SortOrder
    application_end?: SortOrder
    thesis_start?: SortOrder
    thesis_end?: SortOrder
  }

  export type thesis_proposalAvgOrderByAggregateInput = {
    thesis_id?: SortOrder
    supervisor_id?: SortOrder
  }

  export type thesis_proposalMaxOrderByAggregateInput = {
    thesis_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    supervisor_id?: SortOrder
    requirements?: SortOrder
    thesis_type?: SortOrder
    application_start?: SortOrder
    application_end?: SortOrder
    thesis_start?: SortOrder
    thesis_end?: SortOrder
  }

  export type thesis_proposalMinOrderByAggregateInput = {
    thesis_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    supervisor_id?: SortOrder
    requirements?: SortOrder
    thesis_type?: SortOrder
    application_start?: SortOrder
    application_end?: SortOrder
    thesis_start?: SortOrder
    thesis_end?: SortOrder
  }

  export type thesis_proposalSumOrderByAggregateInput = {
    thesis_id?: SortOrder
    supervisor_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type Thesis_proposalScalarRelationFilter = {
    is?: thesis_proposalWhereInput
    isNot?: thesis_proposalWhereInput
  }

  export type thesis_proposal_tagTag_nameThesis_idCompoundUniqueInput = {
    tag_name: string
    thesis_id: number
  }

  export type thesis_proposal_tagCountOrderByAggregateInput = {
    tag_name?: SortOrder
    thesis_id?: SortOrder
  }

  export type thesis_proposal_tagAvgOrderByAggregateInput = {
    thesis_id?: SortOrder
  }

  export type thesis_proposal_tagMaxOrderByAggregateInput = {
    tag_name?: SortOrder
    thesis_id?: SortOrder
  }

  export type thesis_proposal_tagMinOrderByAggregateInput = {
    tag_name?: SortOrder
    thesis_id?: SortOrder
  }

  export type thesis_proposal_tagSumOrderByAggregateInput = {
    thesis_id?: SortOrder
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StudentNullableScalarRelationFilter = {
    is?: studentWhereInput | null
    isNot?: studentWhereInput | null
  }

  export type SupervisorNullableScalarRelationFilter = {
    is?: supervisorWhereInput | null
    isNot?: supervisorWhereInput | null
  }

  export type user_parentCountOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    role?: SortOrder
    uni_email?: SortOrder
    photo?: SortOrder
    faculty_name?: SortOrder
    password_hash?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
    timespent?: SortOrder
    reg_date?: SortOrder
  }

  export type user_parentAvgOrderByAggregateInput = {
    user_id?: SortOrder
    timespent?: SortOrder
  }

  export type user_parentMaxOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    role?: SortOrder
    uni_email?: SortOrder
    photo?: SortOrder
    faculty_name?: SortOrder
    password_hash?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
    timespent?: SortOrder
    reg_date?: SortOrder
  }

  export type user_parentMinOrderByAggregateInput = {
    user_id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    role?: SortOrder
    uni_email?: SortOrder
    photo?: SortOrder
    faculty_name?: SortOrder
    password_hash?: SortOrder
    birthdate?: SortOrder
    gender?: SortOrder
    timespent?: SortOrder
    reg_date?: SortOrder
  }

  export type user_parentSumOrderByAggregateInput = {
    user_id?: SortOrder
    timespent?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type facultyCreateNestedOneWithoutCourse_of_studyInput = {
    create?: XOR<facultyCreateWithoutCourse_of_studyInput, facultyUncheckedCreateWithoutCourse_of_studyInput>
    connectOrCreate?: facultyCreateOrConnectWithoutCourse_of_studyInput
    connect?: facultyWhereUniqueInput
  }

  export type studentCreateNestedManyWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput = {
    create?: XOR<studentCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput, studentUncheckedCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput> | studentCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput[] | studentUncheckedCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput[]
    connectOrCreate?: studentCreateOrConnectWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput | studentCreateOrConnectWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput[]
    createMany?: studentCreateManyCourse_of_study_student_course_of_studyTocourse_of_studyInputEnvelope
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
  }

  export type studentUncheckedCreateNestedManyWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput = {
    create?: XOR<studentCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput, studentUncheckedCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput> | studentCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput[] | studentUncheckedCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput[]
    connectOrCreate?: studentCreateOrConnectWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput | studentCreateOrConnectWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput[]
    createMany?: studentCreateManyCourse_of_study_student_course_of_studyTocourse_of_studyInputEnvelope
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type facultyUpdateOneRequiredWithoutCourse_of_studyNestedInput = {
    create?: XOR<facultyCreateWithoutCourse_of_studyInput, facultyUncheckedCreateWithoutCourse_of_studyInput>
    connectOrCreate?: facultyCreateOrConnectWithoutCourse_of_studyInput
    upsert?: facultyUpsertWithoutCourse_of_studyInput
    connect?: facultyWhereUniqueInput
    update?: XOR<XOR<facultyUpdateToOneWithWhereWithoutCourse_of_studyInput, facultyUpdateWithoutCourse_of_studyInput>, facultyUncheckedUpdateWithoutCourse_of_studyInput>
  }

  export type studentUpdateManyWithoutCourse_of_study_student_course_of_studyTocourse_of_studyNestedInput = {
    create?: XOR<studentCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput, studentUncheckedCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput> | studentCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput[] | studentUncheckedCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput[]
    connectOrCreate?: studentCreateOrConnectWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput | studentCreateOrConnectWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput[]
    upsert?: studentUpsertWithWhereUniqueWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput | studentUpsertWithWhereUniqueWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput[]
    createMany?: studentCreateManyCourse_of_study_student_course_of_studyTocourse_of_studyInputEnvelope
    set?: studentWhereUniqueInput | studentWhereUniqueInput[]
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[]
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    update?: studentUpdateWithWhereUniqueWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput | studentUpdateWithWhereUniqueWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput[]
    updateMany?: studentUpdateManyWithWhereWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput | studentUpdateManyWithWhereWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput[]
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[]
  }

  export type studentUncheckedUpdateManyWithoutCourse_of_study_student_course_of_studyTocourse_of_studyNestedInput = {
    create?: XOR<studentCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput, studentUncheckedCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput> | studentCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput[] | studentUncheckedCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput[]
    connectOrCreate?: studentCreateOrConnectWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput | studentCreateOrConnectWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput[]
    upsert?: studentUpsertWithWhereUniqueWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput | studentUpsertWithWhereUniqueWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput[]
    createMany?: studentCreateManyCourse_of_study_student_course_of_studyTocourse_of_studyInputEnvelope
    set?: studentWhereUniqueInput | studentWhereUniqueInput[]
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[]
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[]
    update?: studentUpdateWithWhereUniqueWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput | studentUpdateWithWhereUniqueWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput[]
    updateMany?: studentUpdateManyWithWhereWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput | studentUpdateManyWithWhereWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput[]
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[]
  }

  export type course_of_studyCreateNestedManyWithoutFacultyInput = {
    create?: XOR<course_of_studyCreateWithoutFacultyInput, course_of_studyUncheckedCreateWithoutFacultyInput> | course_of_studyCreateWithoutFacultyInput[] | course_of_studyUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: course_of_studyCreateOrConnectWithoutFacultyInput | course_of_studyCreateOrConnectWithoutFacultyInput[]
    createMany?: course_of_studyCreateManyFacultyInputEnvelope
    connect?: course_of_studyWhereUniqueInput | course_of_studyWhereUniqueInput[]
  }

  export type user_parentCreateNestedManyWithoutFacultyInput = {
    create?: XOR<user_parentCreateWithoutFacultyInput, user_parentUncheckedCreateWithoutFacultyInput> | user_parentCreateWithoutFacultyInput[] | user_parentUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: user_parentCreateOrConnectWithoutFacultyInput | user_parentCreateOrConnectWithoutFacultyInput[]
    createMany?: user_parentCreateManyFacultyInputEnvelope
    connect?: user_parentWhereUniqueInput | user_parentWhereUniqueInput[]
  }

  export type course_of_studyUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<course_of_studyCreateWithoutFacultyInput, course_of_studyUncheckedCreateWithoutFacultyInput> | course_of_studyCreateWithoutFacultyInput[] | course_of_studyUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: course_of_studyCreateOrConnectWithoutFacultyInput | course_of_studyCreateOrConnectWithoutFacultyInput[]
    createMany?: course_of_studyCreateManyFacultyInputEnvelope
    connect?: course_of_studyWhereUniqueInput | course_of_studyWhereUniqueInput[]
  }

  export type user_parentUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<user_parentCreateWithoutFacultyInput, user_parentUncheckedCreateWithoutFacultyInput> | user_parentCreateWithoutFacultyInput[] | user_parentUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: user_parentCreateOrConnectWithoutFacultyInput | user_parentCreateOrConnectWithoutFacultyInput[]
    createMany?: user_parentCreateManyFacultyInputEnvelope
    connect?: user_parentWhereUniqueInput | user_parentWhereUniqueInput[]
  }

  export type course_of_studyUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<course_of_studyCreateWithoutFacultyInput, course_of_studyUncheckedCreateWithoutFacultyInput> | course_of_studyCreateWithoutFacultyInput[] | course_of_studyUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: course_of_studyCreateOrConnectWithoutFacultyInput | course_of_studyCreateOrConnectWithoutFacultyInput[]
    upsert?: course_of_studyUpsertWithWhereUniqueWithoutFacultyInput | course_of_studyUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: course_of_studyCreateManyFacultyInputEnvelope
    set?: course_of_studyWhereUniqueInput | course_of_studyWhereUniqueInput[]
    disconnect?: course_of_studyWhereUniqueInput | course_of_studyWhereUniqueInput[]
    delete?: course_of_studyWhereUniqueInput | course_of_studyWhereUniqueInput[]
    connect?: course_of_studyWhereUniqueInput | course_of_studyWhereUniqueInput[]
    update?: course_of_studyUpdateWithWhereUniqueWithoutFacultyInput | course_of_studyUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: course_of_studyUpdateManyWithWhereWithoutFacultyInput | course_of_studyUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: course_of_studyScalarWhereInput | course_of_studyScalarWhereInput[]
  }

  export type user_parentUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<user_parentCreateWithoutFacultyInput, user_parentUncheckedCreateWithoutFacultyInput> | user_parentCreateWithoutFacultyInput[] | user_parentUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: user_parentCreateOrConnectWithoutFacultyInput | user_parentCreateOrConnectWithoutFacultyInput[]
    upsert?: user_parentUpsertWithWhereUniqueWithoutFacultyInput | user_parentUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: user_parentCreateManyFacultyInputEnvelope
    set?: user_parentWhereUniqueInput | user_parentWhereUniqueInput[]
    disconnect?: user_parentWhereUniqueInput | user_parentWhereUniqueInput[]
    delete?: user_parentWhereUniqueInput | user_parentWhereUniqueInput[]
    connect?: user_parentWhereUniqueInput | user_parentWhereUniqueInput[]
    update?: user_parentUpdateWithWhereUniqueWithoutFacultyInput | user_parentUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: user_parentUpdateManyWithWhereWithoutFacultyInput | user_parentUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: user_parentScalarWhereInput | user_parentScalarWhereInput[]
  }

  export type course_of_studyUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<course_of_studyCreateWithoutFacultyInput, course_of_studyUncheckedCreateWithoutFacultyInput> | course_of_studyCreateWithoutFacultyInput[] | course_of_studyUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: course_of_studyCreateOrConnectWithoutFacultyInput | course_of_studyCreateOrConnectWithoutFacultyInput[]
    upsert?: course_of_studyUpsertWithWhereUniqueWithoutFacultyInput | course_of_studyUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: course_of_studyCreateManyFacultyInputEnvelope
    set?: course_of_studyWhereUniqueInput | course_of_studyWhereUniqueInput[]
    disconnect?: course_of_studyWhereUniqueInput | course_of_studyWhereUniqueInput[]
    delete?: course_of_studyWhereUniqueInput | course_of_studyWhereUniqueInput[]
    connect?: course_of_studyWhereUniqueInput | course_of_studyWhereUniqueInput[]
    update?: course_of_studyUpdateWithWhereUniqueWithoutFacultyInput | course_of_studyUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: course_of_studyUpdateManyWithWhereWithoutFacultyInput | course_of_studyUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: course_of_studyScalarWhereInput | course_of_studyScalarWhereInput[]
  }

  export type user_parentUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<user_parentCreateWithoutFacultyInput, user_parentUncheckedCreateWithoutFacultyInput> | user_parentCreateWithoutFacultyInput[] | user_parentUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: user_parentCreateOrConnectWithoutFacultyInput | user_parentCreateOrConnectWithoutFacultyInput[]
    upsert?: user_parentUpsertWithWhereUniqueWithoutFacultyInput | user_parentUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: user_parentCreateManyFacultyInputEnvelope
    set?: user_parentWhereUniqueInput | user_parentWhereUniqueInput[]
    disconnect?: user_parentWhereUniqueInput | user_parentWhereUniqueInput[]
    delete?: user_parentWhereUniqueInput | user_parentWhereUniqueInput[]
    connect?: user_parentWhereUniqueInput | user_parentWhereUniqueInput[]
    update?: user_parentUpdateWithWhereUniqueWithoutFacultyInput | user_parentUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: user_parentUpdateManyWithWhereWithoutFacultyInput | user_parentUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: user_parentScalarWhereInput | user_parentScalarWhereInput[]
  }

  export type user_parentCreateNestedOneWithoutStudentInput = {
    create?: XOR<user_parentCreateWithoutStudentInput, user_parentUncheckedCreateWithoutStudentInput>
    connectOrCreate?: user_parentCreateOrConnectWithoutStudentInput
    connect?: user_parentWhereUniqueInput
  }

  export type course_of_studyCreateNestedOneWithoutStudent_student_course_of_studyTocourse_of_studyInput = {
    create?: XOR<course_of_studyCreateWithoutStudent_student_course_of_studyTocourse_of_studyInput, course_of_studyUncheckedCreateWithoutStudent_student_course_of_studyTocourse_of_studyInput>
    connectOrCreate?: course_of_studyCreateOrConnectWithoutStudent_student_course_of_studyTocourse_of_studyInput
    connect?: course_of_studyWhereUniqueInput
  }

  export type student_tagCreateNestedManyWithoutStudentInput = {
    create?: XOR<student_tagCreateWithoutStudentInput, student_tagUncheckedCreateWithoutStudentInput> | student_tagCreateWithoutStudentInput[] | student_tagUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: student_tagCreateOrConnectWithoutStudentInput | student_tagCreateOrConnectWithoutStudentInput[]
    createMany?: student_tagCreateManyStudentInputEnvelope
    connect?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
  }

  export type student_tagUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<student_tagCreateWithoutStudentInput, student_tagUncheckedCreateWithoutStudentInput> | student_tagCreateWithoutStudentInput[] | student_tagUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: student_tagCreateOrConnectWithoutStudentInput | student_tagCreateOrConnectWithoutStudentInput[]
    createMany?: student_tagCreateManyStudentInputEnvelope
    connect?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
  }

  export type user_parentUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<user_parentCreateWithoutStudentInput, user_parentUncheckedCreateWithoutStudentInput>
    connectOrCreate?: user_parentCreateOrConnectWithoutStudentInput
    upsert?: user_parentUpsertWithoutStudentInput
    connect?: user_parentWhereUniqueInput
    update?: XOR<XOR<user_parentUpdateToOneWithWhereWithoutStudentInput, user_parentUpdateWithoutStudentInput>, user_parentUncheckedUpdateWithoutStudentInput>
  }

  export type course_of_studyUpdateOneRequiredWithoutStudent_student_course_of_studyTocourse_of_studyNestedInput = {
    create?: XOR<course_of_studyCreateWithoutStudent_student_course_of_studyTocourse_of_studyInput, course_of_studyUncheckedCreateWithoutStudent_student_course_of_studyTocourse_of_studyInput>
    connectOrCreate?: course_of_studyCreateOrConnectWithoutStudent_student_course_of_studyTocourse_of_studyInput
    upsert?: course_of_studyUpsertWithoutStudent_student_course_of_studyTocourse_of_studyInput
    connect?: course_of_studyWhereUniqueInput
    update?: XOR<XOR<course_of_studyUpdateToOneWithWhereWithoutStudent_student_course_of_studyTocourse_of_studyInput, course_of_studyUpdateWithoutStudent_student_course_of_studyTocourse_of_studyInput>, course_of_studyUncheckedUpdateWithoutStudent_student_course_of_studyTocourse_of_studyInput>
  }

  export type student_tagUpdateManyWithoutStudentNestedInput = {
    create?: XOR<student_tagCreateWithoutStudentInput, student_tagUncheckedCreateWithoutStudentInput> | student_tagCreateWithoutStudentInput[] | student_tagUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: student_tagCreateOrConnectWithoutStudentInput | student_tagCreateOrConnectWithoutStudentInput[]
    upsert?: student_tagUpsertWithWhereUniqueWithoutStudentInput | student_tagUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: student_tagCreateManyStudentInputEnvelope
    set?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
    disconnect?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
    delete?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
    connect?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
    update?: student_tagUpdateWithWhereUniqueWithoutStudentInput | student_tagUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: student_tagUpdateManyWithWhereWithoutStudentInput | student_tagUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: student_tagScalarWhereInput | student_tagScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type student_tagUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<student_tagCreateWithoutStudentInput, student_tagUncheckedCreateWithoutStudentInput> | student_tagCreateWithoutStudentInput[] | student_tagUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: student_tagCreateOrConnectWithoutStudentInput | student_tagCreateOrConnectWithoutStudentInput[]
    upsert?: student_tagUpsertWithWhereUniqueWithoutStudentInput | student_tagUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: student_tagCreateManyStudentInputEnvelope
    set?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
    disconnect?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
    delete?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
    connect?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
    update?: student_tagUpdateWithWhereUniqueWithoutStudentInput | student_tagUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: student_tagUpdateManyWithWhereWithoutStudentInput | student_tagUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: student_tagScalarWhereInput | student_tagScalarWhereInput[]
  }

  export type tagCreateNestedOneWithoutStudent_tagInput = {
    create?: XOR<tagCreateWithoutStudent_tagInput, tagUncheckedCreateWithoutStudent_tagInput>
    connectOrCreate?: tagCreateOrConnectWithoutStudent_tagInput
    connect?: tagWhereUniqueInput
  }

  export type studentCreateNestedOneWithoutStudent_tagInput = {
    create?: XOR<studentCreateWithoutStudent_tagInput, studentUncheckedCreateWithoutStudent_tagInput>
    connectOrCreate?: studentCreateOrConnectWithoutStudent_tagInput
    connect?: studentWhereUniqueInput
  }

  export type tagUpdateOneRequiredWithoutStudent_tagNestedInput = {
    create?: XOR<tagCreateWithoutStudent_tagInput, tagUncheckedCreateWithoutStudent_tagInput>
    connectOrCreate?: tagCreateOrConnectWithoutStudent_tagInput
    upsert?: tagUpsertWithoutStudent_tagInput
    connect?: tagWhereUniqueInput
    update?: XOR<XOR<tagUpdateToOneWithWhereWithoutStudent_tagInput, tagUpdateWithoutStudent_tagInput>, tagUncheckedUpdateWithoutStudent_tagInput>
  }

  export type studentUpdateOneRequiredWithoutStudent_tagNestedInput = {
    create?: XOR<studentCreateWithoutStudent_tagInput, studentUncheckedCreateWithoutStudent_tagInput>
    connectOrCreate?: studentCreateOrConnectWithoutStudent_tagInput
    upsert?: studentUpsertWithoutStudent_tagInput
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutStudent_tagInput, studentUpdateWithoutStudent_tagInput>, studentUncheckedUpdateWithoutStudent_tagInput>
  }

  export type user_parentCreateNestedOneWithoutSupervisorInput = {
    create?: XOR<user_parentCreateWithoutSupervisorInput, user_parentUncheckedCreateWithoutSupervisorInput>
    connectOrCreate?: user_parentCreateOrConnectWithoutSupervisorInput
    connect?: user_parentWhereUniqueInput
  }

  export type thesis_proposalCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<thesis_proposalCreateWithoutSupervisorInput, thesis_proposalUncheckedCreateWithoutSupervisorInput> | thesis_proposalCreateWithoutSupervisorInput[] | thesis_proposalUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: thesis_proposalCreateOrConnectWithoutSupervisorInput | thesis_proposalCreateOrConnectWithoutSupervisorInput[]
    createMany?: thesis_proposalCreateManySupervisorInputEnvelope
    connect?: thesis_proposalWhereUniqueInput | thesis_proposalWhereUniqueInput[]
  }

  export type thesis_proposalUncheckedCreateNestedManyWithoutSupervisorInput = {
    create?: XOR<thesis_proposalCreateWithoutSupervisorInput, thesis_proposalUncheckedCreateWithoutSupervisorInput> | thesis_proposalCreateWithoutSupervisorInput[] | thesis_proposalUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: thesis_proposalCreateOrConnectWithoutSupervisorInput | thesis_proposalCreateOrConnectWithoutSupervisorInput[]
    createMany?: thesis_proposalCreateManySupervisorInputEnvelope
    connect?: thesis_proposalWhereUniqueInput | thesis_proposalWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type user_parentUpdateOneRequiredWithoutSupervisorNestedInput = {
    create?: XOR<user_parentCreateWithoutSupervisorInput, user_parentUncheckedCreateWithoutSupervisorInput>
    connectOrCreate?: user_parentCreateOrConnectWithoutSupervisorInput
    upsert?: user_parentUpsertWithoutSupervisorInput
    connect?: user_parentWhereUniqueInput
    update?: XOR<XOR<user_parentUpdateToOneWithWhereWithoutSupervisorInput, user_parentUpdateWithoutSupervisorInput>, user_parentUncheckedUpdateWithoutSupervisorInput>
  }

  export type thesis_proposalUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<thesis_proposalCreateWithoutSupervisorInput, thesis_proposalUncheckedCreateWithoutSupervisorInput> | thesis_proposalCreateWithoutSupervisorInput[] | thesis_proposalUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: thesis_proposalCreateOrConnectWithoutSupervisorInput | thesis_proposalCreateOrConnectWithoutSupervisorInput[]
    upsert?: thesis_proposalUpsertWithWhereUniqueWithoutSupervisorInput | thesis_proposalUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: thesis_proposalCreateManySupervisorInputEnvelope
    set?: thesis_proposalWhereUniqueInput | thesis_proposalWhereUniqueInput[]
    disconnect?: thesis_proposalWhereUniqueInput | thesis_proposalWhereUniqueInput[]
    delete?: thesis_proposalWhereUniqueInput | thesis_proposalWhereUniqueInput[]
    connect?: thesis_proposalWhereUniqueInput | thesis_proposalWhereUniqueInput[]
    update?: thesis_proposalUpdateWithWhereUniqueWithoutSupervisorInput | thesis_proposalUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: thesis_proposalUpdateManyWithWhereWithoutSupervisorInput | thesis_proposalUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: thesis_proposalScalarWhereInput | thesis_proposalScalarWhereInput[]
  }

  export type thesis_proposalUncheckedUpdateManyWithoutSupervisorNestedInput = {
    create?: XOR<thesis_proposalCreateWithoutSupervisorInput, thesis_proposalUncheckedCreateWithoutSupervisorInput> | thesis_proposalCreateWithoutSupervisorInput[] | thesis_proposalUncheckedCreateWithoutSupervisorInput[]
    connectOrCreate?: thesis_proposalCreateOrConnectWithoutSupervisorInput | thesis_proposalCreateOrConnectWithoutSupervisorInput[]
    upsert?: thesis_proposalUpsertWithWhereUniqueWithoutSupervisorInput | thesis_proposalUpsertWithWhereUniqueWithoutSupervisorInput[]
    createMany?: thesis_proposalCreateManySupervisorInputEnvelope
    set?: thesis_proposalWhereUniqueInput | thesis_proposalWhereUniqueInput[]
    disconnect?: thesis_proposalWhereUniqueInput | thesis_proposalWhereUniqueInput[]
    delete?: thesis_proposalWhereUniqueInput | thesis_proposalWhereUniqueInput[]
    connect?: thesis_proposalWhereUniqueInput | thesis_proposalWhereUniqueInput[]
    update?: thesis_proposalUpdateWithWhereUniqueWithoutSupervisorInput | thesis_proposalUpdateWithWhereUniqueWithoutSupervisorInput[]
    updateMany?: thesis_proposalUpdateManyWithWhereWithoutSupervisorInput | thesis_proposalUpdateManyWithWhereWithoutSupervisorInput[]
    deleteMany?: thesis_proposalScalarWhereInput | thesis_proposalScalarWhereInput[]
  }

  export type student_tagCreateNestedManyWithoutTagInput = {
    create?: XOR<student_tagCreateWithoutTagInput, student_tagUncheckedCreateWithoutTagInput> | student_tagCreateWithoutTagInput[] | student_tagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: student_tagCreateOrConnectWithoutTagInput | student_tagCreateOrConnectWithoutTagInput[]
    createMany?: student_tagCreateManyTagInputEnvelope
    connect?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
  }

  export type thesis_proposal_tagCreateNestedManyWithoutTagInput = {
    create?: XOR<thesis_proposal_tagCreateWithoutTagInput, thesis_proposal_tagUncheckedCreateWithoutTagInput> | thesis_proposal_tagCreateWithoutTagInput[] | thesis_proposal_tagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: thesis_proposal_tagCreateOrConnectWithoutTagInput | thesis_proposal_tagCreateOrConnectWithoutTagInput[]
    createMany?: thesis_proposal_tagCreateManyTagInputEnvelope
    connect?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
  }

  export type student_tagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<student_tagCreateWithoutTagInput, student_tagUncheckedCreateWithoutTagInput> | student_tagCreateWithoutTagInput[] | student_tagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: student_tagCreateOrConnectWithoutTagInput | student_tagCreateOrConnectWithoutTagInput[]
    createMany?: student_tagCreateManyTagInputEnvelope
    connect?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
  }

  export type thesis_proposal_tagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<thesis_proposal_tagCreateWithoutTagInput, thesis_proposal_tagUncheckedCreateWithoutTagInput> | thesis_proposal_tagCreateWithoutTagInput[] | thesis_proposal_tagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: thesis_proposal_tagCreateOrConnectWithoutTagInput | thesis_proposal_tagCreateOrConnectWithoutTagInput[]
    createMany?: thesis_proposal_tagCreateManyTagInputEnvelope
    connect?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
  }

  export type student_tagUpdateManyWithoutTagNestedInput = {
    create?: XOR<student_tagCreateWithoutTagInput, student_tagUncheckedCreateWithoutTagInput> | student_tagCreateWithoutTagInput[] | student_tagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: student_tagCreateOrConnectWithoutTagInput | student_tagCreateOrConnectWithoutTagInput[]
    upsert?: student_tagUpsertWithWhereUniqueWithoutTagInput | student_tagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: student_tagCreateManyTagInputEnvelope
    set?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
    disconnect?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
    delete?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
    connect?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
    update?: student_tagUpdateWithWhereUniqueWithoutTagInput | student_tagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: student_tagUpdateManyWithWhereWithoutTagInput | student_tagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: student_tagScalarWhereInput | student_tagScalarWhereInput[]
  }

  export type thesis_proposal_tagUpdateManyWithoutTagNestedInput = {
    create?: XOR<thesis_proposal_tagCreateWithoutTagInput, thesis_proposal_tagUncheckedCreateWithoutTagInput> | thesis_proposal_tagCreateWithoutTagInput[] | thesis_proposal_tagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: thesis_proposal_tagCreateOrConnectWithoutTagInput | thesis_proposal_tagCreateOrConnectWithoutTagInput[]
    upsert?: thesis_proposal_tagUpsertWithWhereUniqueWithoutTagInput | thesis_proposal_tagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: thesis_proposal_tagCreateManyTagInputEnvelope
    set?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
    disconnect?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
    delete?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
    connect?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
    update?: thesis_proposal_tagUpdateWithWhereUniqueWithoutTagInput | thesis_proposal_tagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: thesis_proposal_tagUpdateManyWithWhereWithoutTagInput | thesis_proposal_tagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: thesis_proposal_tagScalarWhereInput | thesis_proposal_tagScalarWhereInput[]
  }

  export type student_tagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<student_tagCreateWithoutTagInput, student_tagUncheckedCreateWithoutTagInput> | student_tagCreateWithoutTagInput[] | student_tagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: student_tagCreateOrConnectWithoutTagInput | student_tagCreateOrConnectWithoutTagInput[]
    upsert?: student_tagUpsertWithWhereUniqueWithoutTagInput | student_tagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: student_tagCreateManyTagInputEnvelope
    set?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
    disconnect?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
    delete?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
    connect?: student_tagWhereUniqueInput | student_tagWhereUniqueInput[]
    update?: student_tagUpdateWithWhereUniqueWithoutTagInput | student_tagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: student_tagUpdateManyWithWhereWithoutTagInput | student_tagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: student_tagScalarWhereInput | student_tagScalarWhereInput[]
  }

  export type thesis_proposal_tagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<thesis_proposal_tagCreateWithoutTagInput, thesis_proposal_tagUncheckedCreateWithoutTagInput> | thesis_proposal_tagCreateWithoutTagInput[] | thesis_proposal_tagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: thesis_proposal_tagCreateOrConnectWithoutTagInput | thesis_proposal_tagCreateOrConnectWithoutTagInput[]
    upsert?: thesis_proposal_tagUpsertWithWhereUniqueWithoutTagInput | thesis_proposal_tagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: thesis_proposal_tagCreateManyTagInputEnvelope
    set?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
    disconnect?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
    delete?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
    connect?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
    update?: thesis_proposal_tagUpdateWithWhereUniqueWithoutTagInput | thesis_proposal_tagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: thesis_proposal_tagUpdateManyWithWhereWithoutTagInput | thesis_proposal_tagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: thesis_proposal_tagScalarWhereInput | thesis_proposal_tagScalarWhereInput[]
  }

  export type supervisorCreateNestedOneWithoutThesis_proposalInput = {
    create?: XOR<supervisorCreateWithoutThesis_proposalInput, supervisorUncheckedCreateWithoutThesis_proposalInput>
    connectOrCreate?: supervisorCreateOrConnectWithoutThesis_proposalInput
    connect?: supervisorWhereUniqueInput
  }

  export type thesis_proposal_tagCreateNestedManyWithoutThesis_proposalInput = {
    create?: XOR<thesis_proposal_tagCreateWithoutThesis_proposalInput, thesis_proposal_tagUncheckedCreateWithoutThesis_proposalInput> | thesis_proposal_tagCreateWithoutThesis_proposalInput[] | thesis_proposal_tagUncheckedCreateWithoutThesis_proposalInput[]
    connectOrCreate?: thesis_proposal_tagCreateOrConnectWithoutThesis_proposalInput | thesis_proposal_tagCreateOrConnectWithoutThesis_proposalInput[]
    createMany?: thesis_proposal_tagCreateManyThesis_proposalInputEnvelope
    connect?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
  }

  export type thesis_proposal_tagUncheckedCreateNestedManyWithoutThesis_proposalInput = {
    create?: XOR<thesis_proposal_tagCreateWithoutThesis_proposalInput, thesis_proposal_tagUncheckedCreateWithoutThesis_proposalInput> | thesis_proposal_tagCreateWithoutThesis_proposalInput[] | thesis_proposal_tagUncheckedCreateWithoutThesis_proposalInput[]
    connectOrCreate?: thesis_proposal_tagCreateOrConnectWithoutThesis_proposalInput | thesis_proposal_tagCreateOrConnectWithoutThesis_proposalInput[]
    createMany?: thesis_proposal_tagCreateManyThesis_proposalInputEnvelope
    connect?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type supervisorUpdateOneRequiredWithoutThesis_proposalNestedInput = {
    create?: XOR<supervisorCreateWithoutThesis_proposalInput, supervisorUncheckedCreateWithoutThesis_proposalInput>
    connectOrCreate?: supervisorCreateOrConnectWithoutThesis_proposalInput
    upsert?: supervisorUpsertWithoutThesis_proposalInput
    connect?: supervisorWhereUniqueInput
    update?: XOR<XOR<supervisorUpdateToOneWithWhereWithoutThesis_proposalInput, supervisorUpdateWithoutThesis_proposalInput>, supervisorUncheckedUpdateWithoutThesis_proposalInput>
  }

  export type thesis_proposal_tagUpdateManyWithoutThesis_proposalNestedInput = {
    create?: XOR<thesis_proposal_tagCreateWithoutThesis_proposalInput, thesis_proposal_tagUncheckedCreateWithoutThesis_proposalInput> | thesis_proposal_tagCreateWithoutThesis_proposalInput[] | thesis_proposal_tagUncheckedCreateWithoutThesis_proposalInput[]
    connectOrCreate?: thesis_proposal_tagCreateOrConnectWithoutThesis_proposalInput | thesis_proposal_tagCreateOrConnectWithoutThesis_proposalInput[]
    upsert?: thesis_proposal_tagUpsertWithWhereUniqueWithoutThesis_proposalInput | thesis_proposal_tagUpsertWithWhereUniqueWithoutThesis_proposalInput[]
    createMany?: thesis_proposal_tagCreateManyThesis_proposalInputEnvelope
    set?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
    disconnect?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
    delete?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
    connect?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
    update?: thesis_proposal_tagUpdateWithWhereUniqueWithoutThesis_proposalInput | thesis_proposal_tagUpdateWithWhereUniqueWithoutThesis_proposalInput[]
    updateMany?: thesis_proposal_tagUpdateManyWithWhereWithoutThesis_proposalInput | thesis_proposal_tagUpdateManyWithWhereWithoutThesis_proposalInput[]
    deleteMany?: thesis_proposal_tagScalarWhereInput | thesis_proposal_tagScalarWhereInput[]
  }

  export type thesis_proposal_tagUncheckedUpdateManyWithoutThesis_proposalNestedInput = {
    create?: XOR<thesis_proposal_tagCreateWithoutThesis_proposalInput, thesis_proposal_tagUncheckedCreateWithoutThesis_proposalInput> | thesis_proposal_tagCreateWithoutThesis_proposalInput[] | thesis_proposal_tagUncheckedCreateWithoutThesis_proposalInput[]
    connectOrCreate?: thesis_proposal_tagCreateOrConnectWithoutThesis_proposalInput | thesis_proposal_tagCreateOrConnectWithoutThesis_proposalInput[]
    upsert?: thesis_proposal_tagUpsertWithWhereUniqueWithoutThesis_proposalInput | thesis_proposal_tagUpsertWithWhereUniqueWithoutThesis_proposalInput[]
    createMany?: thesis_proposal_tagCreateManyThesis_proposalInputEnvelope
    set?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
    disconnect?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
    delete?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
    connect?: thesis_proposal_tagWhereUniqueInput | thesis_proposal_tagWhereUniqueInput[]
    update?: thesis_proposal_tagUpdateWithWhereUniqueWithoutThesis_proposalInput | thesis_proposal_tagUpdateWithWhereUniqueWithoutThesis_proposalInput[]
    updateMany?: thesis_proposal_tagUpdateManyWithWhereWithoutThesis_proposalInput | thesis_proposal_tagUpdateManyWithWhereWithoutThesis_proposalInput[]
    deleteMany?: thesis_proposal_tagScalarWhereInput | thesis_proposal_tagScalarWhereInput[]
  }

  export type tagCreateNestedOneWithoutThesis_proposal_tagInput = {
    create?: XOR<tagCreateWithoutThesis_proposal_tagInput, tagUncheckedCreateWithoutThesis_proposal_tagInput>
    connectOrCreate?: tagCreateOrConnectWithoutThesis_proposal_tagInput
    connect?: tagWhereUniqueInput
  }

  export type thesis_proposalCreateNestedOneWithoutThesis_proposal_tagInput = {
    create?: XOR<thesis_proposalCreateWithoutThesis_proposal_tagInput, thesis_proposalUncheckedCreateWithoutThesis_proposal_tagInput>
    connectOrCreate?: thesis_proposalCreateOrConnectWithoutThesis_proposal_tagInput
    connect?: thesis_proposalWhereUniqueInput
  }

  export type tagUpdateOneRequiredWithoutThesis_proposal_tagNestedInput = {
    create?: XOR<tagCreateWithoutThesis_proposal_tagInput, tagUncheckedCreateWithoutThesis_proposal_tagInput>
    connectOrCreate?: tagCreateOrConnectWithoutThesis_proposal_tagInput
    upsert?: tagUpsertWithoutThesis_proposal_tagInput
    connect?: tagWhereUniqueInput
    update?: XOR<XOR<tagUpdateToOneWithWhereWithoutThesis_proposal_tagInput, tagUpdateWithoutThesis_proposal_tagInput>, tagUncheckedUpdateWithoutThesis_proposal_tagInput>
  }

  export type thesis_proposalUpdateOneRequiredWithoutThesis_proposal_tagNestedInput = {
    create?: XOR<thesis_proposalCreateWithoutThesis_proposal_tagInput, thesis_proposalUncheckedCreateWithoutThesis_proposal_tagInput>
    connectOrCreate?: thesis_proposalCreateOrConnectWithoutThesis_proposal_tagInput
    upsert?: thesis_proposalUpsertWithoutThesis_proposal_tagInput
    connect?: thesis_proposalWhereUniqueInput
    update?: XOR<XOR<thesis_proposalUpdateToOneWithWhereWithoutThesis_proposal_tagInput, thesis_proposalUpdateWithoutThesis_proposal_tagInput>, thesis_proposalUncheckedUpdateWithoutThesis_proposal_tagInput>
  }

  export type studentCreateNestedOneWithoutUser_parentInput = {
    create?: XOR<studentCreateWithoutUser_parentInput, studentUncheckedCreateWithoutUser_parentInput>
    connectOrCreate?: studentCreateOrConnectWithoutUser_parentInput
    connect?: studentWhereUniqueInput
  }

  export type supervisorCreateNestedOneWithoutUser_parentInput = {
    create?: XOR<supervisorCreateWithoutUser_parentInput, supervisorUncheckedCreateWithoutUser_parentInput>
    connectOrCreate?: supervisorCreateOrConnectWithoutUser_parentInput
    connect?: supervisorWhereUniqueInput
  }

  export type facultyCreateNestedOneWithoutUser_parentInput = {
    create?: XOR<facultyCreateWithoutUser_parentInput, facultyUncheckedCreateWithoutUser_parentInput>
    connectOrCreate?: facultyCreateOrConnectWithoutUser_parentInput
    connect?: facultyWhereUniqueInput
  }

  export type studentUncheckedCreateNestedOneWithoutUser_parentInput = {
    create?: XOR<studentCreateWithoutUser_parentInput, studentUncheckedCreateWithoutUser_parentInput>
    connectOrCreate?: studentCreateOrConnectWithoutUser_parentInput
    connect?: studentWhereUniqueInput
  }

  export type supervisorUncheckedCreateNestedOneWithoutUser_parentInput = {
    create?: XOR<supervisorCreateWithoutUser_parentInput, supervisorUncheckedCreateWithoutUser_parentInput>
    connectOrCreate?: supervisorCreateOrConnectWithoutUser_parentInput
    connect?: supervisorWhereUniqueInput
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Uint8Array | null
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type studentUpdateOneWithoutUser_parentNestedInput = {
    create?: XOR<studentCreateWithoutUser_parentInput, studentUncheckedCreateWithoutUser_parentInput>
    connectOrCreate?: studentCreateOrConnectWithoutUser_parentInput
    upsert?: studentUpsertWithoutUser_parentInput
    disconnect?: studentWhereInput | boolean
    delete?: studentWhereInput | boolean
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutUser_parentInput, studentUpdateWithoutUser_parentInput>, studentUncheckedUpdateWithoutUser_parentInput>
  }

  export type supervisorUpdateOneWithoutUser_parentNestedInput = {
    create?: XOR<supervisorCreateWithoutUser_parentInput, supervisorUncheckedCreateWithoutUser_parentInput>
    connectOrCreate?: supervisorCreateOrConnectWithoutUser_parentInput
    upsert?: supervisorUpsertWithoutUser_parentInput
    disconnect?: supervisorWhereInput | boolean
    delete?: supervisorWhereInput | boolean
    connect?: supervisorWhereUniqueInput
    update?: XOR<XOR<supervisorUpdateToOneWithWhereWithoutUser_parentInput, supervisorUpdateWithoutUser_parentInput>, supervisorUncheckedUpdateWithoutUser_parentInput>
  }

  export type facultyUpdateOneRequiredWithoutUser_parentNestedInput = {
    create?: XOR<facultyCreateWithoutUser_parentInput, facultyUncheckedCreateWithoutUser_parentInput>
    connectOrCreate?: facultyCreateOrConnectWithoutUser_parentInput
    upsert?: facultyUpsertWithoutUser_parentInput
    connect?: facultyWhereUniqueInput
    update?: XOR<XOR<facultyUpdateToOneWithWhereWithoutUser_parentInput, facultyUpdateWithoutUser_parentInput>, facultyUncheckedUpdateWithoutUser_parentInput>
  }

  export type studentUncheckedUpdateOneWithoutUser_parentNestedInput = {
    create?: XOR<studentCreateWithoutUser_parentInput, studentUncheckedCreateWithoutUser_parentInput>
    connectOrCreate?: studentCreateOrConnectWithoutUser_parentInput
    upsert?: studentUpsertWithoutUser_parentInput
    disconnect?: studentWhereInput | boolean
    delete?: studentWhereInput | boolean
    connect?: studentWhereUniqueInput
    update?: XOR<XOR<studentUpdateToOneWithWhereWithoutUser_parentInput, studentUpdateWithoutUser_parentInput>, studentUncheckedUpdateWithoutUser_parentInput>
  }

  export type supervisorUncheckedUpdateOneWithoutUser_parentNestedInput = {
    create?: XOR<supervisorCreateWithoutUser_parentInput, supervisorUncheckedCreateWithoutUser_parentInput>
    connectOrCreate?: supervisorCreateOrConnectWithoutUser_parentInput
    upsert?: supervisorUpsertWithoutUser_parentInput
    disconnect?: supervisorWhereInput | boolean
    delete?: supervisorWhereInput | boolean
    connect?: supervisorWhereUniqueInput
    update?: XOR<XOR<supervisorUpdateToOneWithWhereWithoutUser_parentInput, supervisorUpdateWithoutUser_parentInput>, supervisorUncheckedUpdateWithoutUser_parentInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Uint8Array | null
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel> | null
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Uint8Array | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type facultyCreateWithoutCourse_of_studyInput = {
    faculty_name: string
    user_parent?: user_parentCreateNestedManyWithoutFacultyInput
  }

  export type facultyUncheckedCreateWithoutCourse_of_studyInput = {
    faculty_name: string
    user_parent?: user_parentUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type facultyCreateOrConnectWithoutCourse_of_studyInput = {
    where: facultyWhereUniqueInput
    create: XOR<facultyCreateWithoutCourse_of_studyInput, facultyUncheckedCreateWithoutCourse_of_studyInput>
  }

  export type studentCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput = {
    user_parent: user_parentCreateNestedOneWithoutStudentInput
    student_tag?: student_tagCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput = {
    student_id: number
    student_tag?: student_tagUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput, studentUncheckedCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput>
  }

  export type studentCreateManyCourse_of_study_student_course_of_studyTocourse_of_studyInputEnvelope = {
    data: studentCreateManyCourse_of_study_student_course_of_studyTocourse_of_studyInput | studentCreateManyCourse_of_study_student_course_of_studyTocourse_of_studyInput[]
    skipDuplicates?: boolean
  }

  export type facultyUpsertWithoutCourse_of_studyInput = {
    update: XOR<facultyUpdateWithoutCourse_of_studyInput, facultyUncheckedUpdateWithoutCourse_of_studyInput>
    create: XOR<facultyCreateWithoutCourse_of_studyInput, facultyUncheckedCreateWithoutCourse_of_studyInput>
    where?: facultyWhereInput
  }

  export type facultyUpdateToOneWithWhereWithoutCourse_of_studyInput = {
    where?: facultyWhereInput
    data: XOR<facultyUpdateWithoutCourse_of_studyInput, facultyUncheckedUpdateWithoutCourse_of_studyInput>
  }

  export type facultyUpdateWithoutCourse_of_studyInput = {
    faculty_name?: StringFieldUpdateOperationsInput | string
    user_parent?: user_parentUpdateManyWithoutFacultyNestedInput
  }

  export type facultyUncheckedUpdateWithoutCourse_of_studyInput = {
    faculty_name?: StringFieldUpdateOperationsInput | string
    user_parent?: user_parentUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type studentUpsertWithWhereUniqueWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput = {
    where: studentWhereUniqueInput
    update: XOR<studentUpdateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput, studentUncheckedUpdateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput>
    create: XOR<studentCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput, studentUncheckedCreateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput>
  }

  export type studentUpdateWithWhereUniqueWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput = {
    where: studentWhereUniqueInput
    data: XOR<studentUpdateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput, studentUncheckedUpdateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput>
  }

  export type studentUpdateManyWithWhereWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput = {
    where: studentScalarWhereInput
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput>
  }

  export type studentScalarWhereInput = {
    AND?: studentScalarWhereInput | studentScalarWhereInput[]
    OR?: studentScalarWhereInput[]
    NOT?: studentScalarWhereInput | studentScalarWhereInput[]
    student_id?: IntFilter<"student"> | number
    course_of_study?: StringFilter<"student"> | string
  }

  export type course_of_studyCreateWithoutFacultyInput = {
    course_name: string
    student_student_course_of_studyTocourse_of_study?: studentCreateNestedManyWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput
  }

  export type course_of_studyUncheckedCreateWithoutFacultyInput = {
    course_name: string
    student_student_course_of_studyTocourse_of_study?: studentUncheckedCreateNestedManyWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput
  }

  export type course_of_studyCreateOrConnectWithoutFacultyInput = {
    where: course_of_studyWhereUniqueInput
    create: XOR<course_of_studyCreateWithoutFacultyInput, course_of_studyUncheckedCreateWithoutFacultyInput>
  }

  export type course_of_studyCreateManyFacultyInputEnvelope = {
    data: course_of_studyCreateManyFacultyInput | course_of_studyCreateManyFacultyInput[]
    skipDuplicates?: boolean
  }

  export type user_parentCreateWithoutFacultyInput = {
    name: string
    surname: string
    role: string
    uni_email: string
    photo?: Uint8Array | null
    password_hash: string
    birthdate?: Date | string | null
    gender?: string | null
    timespent: bigint | number
    reg_date: Date | string
    student?: studentCreateNestedOneWithoutUser_parentInput
    supervisor?: supervisorCreateNestedOneWithoutUser_parentInput
  }

  export type user_parentUncheckedCreateWithoutFacultyInput = {
    user_id?: number
    name: string
    surname: string
    role: string
    uni_email: string
    photo?: Uint8Array | null
    password_hash: string
    birthdate?: Date | string | null
    gender?: string | null
    timespent: bigint | number
    reg_date: Date | string
    student?: studentUncheckedCreateNestedOneWithoutUser_parentInput
    supervisor?: supervisorUncheckedCreateNestedOneWithoutUser_parentInput
  }

  export type user_parentCreateOrConnectWithoutFacultyInput = {
    where: user_parentWhereUniqueInput
    create: XOR<user_parentCreateWithoutFacultyInput, user_parentUncheckedCreateWithoutFacultyInput>
  }

  export type user_parentCreateManyFacultyInputEnvelope = {
    data: user_parentCreateManyFacultyInput | user_parentCreateManyFacultyInput[]
    skipDuplicates?: boolean
  }

  export type course_of_studyUpsertWithWhereUniqueWithoutFacultyInput = {
    where: course_of_studyWhereUniqueInput
    update: XOR<course_of_studyUpdateWithoutFacultyInput, course_of_studyUncheckedUpdateWithoutFacultyInput>
    create: XOR<course_of_studyCreateWithoutFacultyInput, course_of_studyUncheckedCreateWithoutFacultyInput>
  }

  export type course_of_studyUpdateWithWhereUniqueWithoutFacultyInput = {
    where: course_of_studyWhereUniqueInput
    data: XOR<course_of_studyUpdateWithoutFacultyInput, course_of_studyUncheckedUpdateWithoutFacultyInput>
  }

  export type course_of_studyUpdateManyWithWhereWithoutFacultyInput = {
    where: course_of_studyScalarWhereInput
    data: XOR<course_of_studyUpdateManyMutationInput, course_of_studyUncheckedUpdateManyWithoutFacultyInput>
  }

  export type course_of_studyScalarWhereInput = {
    AND?: course_of_studyScalarWhereInput | course_of_studyScalarWhereInput[]
    OR?: course_of_studyScalarWhereInput[]
    NOT?: course_of_studyScalarWhereInput | course_of_studyScalarWhereInput[]
    course_name?: StringFilter<"course_of_study"> | string
    faculty_name?: StringFilter<"course_of_study"> | string
  }

  export type user_parentUpsertWithWhereUniqueWithoutFacultyInput = {
    where: user_parentWhereUniqueInput
    update: XOR<user_parentUpdateWithoutFacultyInput, user_parentUncheckedUpdateWithoutFacultyInput>
    create: XOR<user_parentCreateWithoutFacultyInput, user_parentUncheckedCreateWithoutFacultyInput>
  }

  export type user_parentUpdateWithWhereUniqueWithoutFacultyInput = {
    where: user_parentWhereUniqueInput
    data: XOR<user_parentUpdateWithoutFacultyInput, user_parentUncheckedUpdateWithoutFacultyInput>
  }

  export type user_parentUpdateManyWithWhereWithoutFacultyInput = {
    where: user_parentScalarWhereInput
    data: XOR<user_parentUpdateManyMutationInput, user_parentUncheckedUpdateManyWithoutFacultyInput>
  }

  export type user_parentScalarWhereInput = {
    AND?: user_parentScalarWhereInput | user_parentScalarWhereInput[]
    OR?: user_parentScalarWhereInput[]
    NOT?: user_parentScalarWhereInput | user_parentScalarWhereInput[]
    user_id?: IntFilter<"user_parent"> | number
    name?: StringFilter<"user_parent"> | string
    surname?: StringFilter<"user_parent"> | string
    role?: StringFilter<"user_parent"> | string
    uni_email?: StringFilter<"user_parent"> | string
    photo?: BytesNullableFilter<"user_parent"> | Uint8Array | null
    faculty_name?: StringFilter<"user_parent"> | string
    password_hash?: StringFilter<"user_parent"> | string
    birthdate?: DateTimeNullableFilter<"user_parent"> | Date | string | null
    gender?: StringNullableFilter<"user_parent"> | string | null
    timespent?: BigIntFilter<"user_parent"> | bigint | number
    reg_date?: DateTimeFilter<"user_parent"> | Date | string
  }

  export type user_parentCreateWithoutStudentInput = {
    name: string
    surname: string
    role: string
    uni_email: string
    photo?: Uint8Array | null
    password_hash: string
    birthdate?: Date | string | null
    gender?: string | null
    timespent: bigint | number
    reg_date: Date | string
    supervisor?: supervisorCreateNestedOneWithoutUser_parentInput
    faculty: facultyCreateNestedOneWithoutUser_parentInput
  }

  export type user_parentUncheckedCreateWithoutStudentInput = {
    user_id?: number
    name: string
    surname: string
    role: string
    uni_email: string
    photo?: Uint8Array | null
    faculty_name: string
    password_hash: string
    birthdate?: Date | string | null
    gender?: string | null
    timespent: bigint | number
    reg_date: Date | string
    supervisor?: supervisorUncheckedCreateNestedOneWithoutUser_parentInput
  }

  export type user_parentCreateOrConnectWithoutStudentInput = {
    where: user_parentWhereUniqueInput
    create: XOR<user_parentCreateWithoutStudentInput, user_parentUncheckedCreateWithoutStudentInput>
  }

  export type course_of_studyCreateWithoutStudent_student_course_of_studyTocourse_of_studyInput = {
    course_name: string
    faculty: facultyCreateNestedOneWithoutCourse_of_studyInput
  }

  export type course_of_studyUncheckedCreateWithoutStudent_student_course_of_studyTocourse_of_studyInput = {
    course_name: string
    faculty_name: string
  }

  export type course_of_studyCreateOrConnectWithoutStudent_student_course_of_studyTocourse_of_studyInput = {
    where: course_of_studyWhereUniqueInput
    create: XOR<course_of_studyCreateWithoutStudent_student_course_of_studyTocourse_of_studyInput, course_of_studyUncheckedCreateWithoutStudent_student_course_of_studyTocourse_of_studyInput>
  }

  export type student_tagCreateWithoutStudentInput = {
    tag: tagCreateNestedOneWithoutStudent_tagInput
  }

  export type student_tagUncheckedCreateWithoutStudentInput = {
    tag_name: string
  }

  export type student_tagCreateOrConnectWithoutStudentInput = {
    where: student_tagWhereUniqueInput
    create: XOR<student_tagCreateWithoutStudentInput, student_tagUncheckedCreateWithoutStudentInput>
  }

  export type student_tagCreateManyStudentInputEnvelope = {
    data: student_tagCreateManyStudentInput | student_tagCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type user_parentUpsertWithoutStudentInput = {
    update: XOR<user_parentUpdateWithoutStudentInput, user_parentUncheckedUpdateWithoutStudentInput>
    create: XOR<user_parentCreateWithoutStudentInput, user_parentUncheckedCreateWithoutStudentInput>
    where?: user_parentWhereInput
  }

  export type user_parentUpdateToOneWithWhereWithoutStudentInput = {
    where?: user_parentWhereInput
    data: XOR<user_parentUpdateWithoutStudentInput, user_parentUncheckedUpdateWithoutStudentInput>
  }

  export type user_parentUpdateWithoutStudentInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    uni_email?: StringFieldUpdateOperationsInput | string
    photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    password_hash?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: BigIntFieldUpdateOperationsInput | bigint | number
    reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisor?: supervisorUpdateOneWithoutUser_parentNestedInput
    faculty?: facultyUpdateOneRequiredWithoutUser_parentNestedInput
  }

  export type user_parentUncheckedUpdateWithoutStudentInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    uni_email?: StringFieldUpdateOperationsInput | string
    photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    faculty_name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: BigIntFieldUpdateOperationsInput | bigint | number
    reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    supervisor?: supervisorUncheckedUpdateOneWithoutUser_parentNestedInput
  }

  export type course_of_studyUpsertWithoutStudent_student_course_of_studyTocourse_of_studyInput = {
    update: XOR<course_of_studyUpdateWithoutStudent_student_course_of_studyTocourse_of_studyInput, course_of_studyUncheckedUpdateWithoutStudent_student_course_of_studyTocourse_of_studyInput>
    create: XOR<course_of_studyCreateWithoutStudent_student_course_of_studyTocourse_of_studyInput, course_of_studyUncheckedCreateWithoutStudent_student_course_of_studyTocourse_of_studyInput>
    where?: course_of_studyWhereInput
  }

  export type course_of_studyUpdateToOneWithWhereWithoutStudent_student_course_of_studyTocourse_of_studyInput = {
    where?: course_of_studyWhereInput
    data: XOR<course_of_studyUpdateWithoutStudent_student_course_of_studyTocourse_of_studyInput, course_of_studyUncheckedUpdateWithoutStudent_student_course_of_studyTocourse_of_studyInput>
  }

  export type course_of_studyUpdateWithoutStudent_student_course_of_studyTocourse_of_studyInput = {
    course_name?: StringFieldUpdateOperationsInput | string
    faculty?: facultyUpdateOneRequiredWithoutCourse_of_studyNestedInput
  }

  export type course_of_studyUncheckedUpdateWithoutStudent_student_course_of_studyTocourse_of_studyInput = {
    course_name?: StringFieldUpdateOperationsInput | string
    faculty_name?: StringFieldUpdateOperationsInput | string
  }

  export type student_tagUpsertWithWhereUniqueWithoutStudentInput = {
    where: student_tagWhereUniqueInput
    update: XOR<student_tagUpdateWithoutStudentInput, student_tagUncheckedUpdateWithoutStudentInput>
    create: XOR<student_tagCreateWithoutStudentInput, student_tagUncheckedCreateWithoutStudentInput>
  }

  export type student_tagUpdateWithWhereUniqueWithoutStudentInput = {
    where: student_tagWhereUniqueInput
    data: XOR<student_tagUpdateWithoutStudentInput, student_tagUncheckedUpdateWithoutStudentInput>
  }

  export type student_tagUpdateManyWithWhereWithoutStudentInput = {
    where: student_tagScalarWhereInput
    data: XOR<student_tagUpdateManyMutationInput, student_tagUncheckedUpdateManyWithoutStudentInput>
  }

  export type student_tagScalarWhereInput = {
    AND?: student_tagScalarWhereInput | student_tagScalarWhereInput[]
    OR?: student_tagScalarWhereInput[]
    NOT?: student_tagScalarWhereInput | student_tagScalarWhereInput[]
    tag_name?: StringFilter<"student_tag"> | string
    student_id?: IntFilter<"student_tag"> | number
  }

  export type tagCreateWithoutStudent_tagInput = {
    tag_name: string
    thesis_proposal_tag?: thesis_proposal_tagCreateNestedManyWithoutTagInput
  }

  export type tagUncheckedCreateWithoutStudent_tagInput = {
    tag_name: string
    thesis_proposal_tag?: thesis_proposal_tagUncheckedCreateNestedManyWithoutTagInput
  }

  export type tagCreateOrConnectWithoutStudent_tagInput = {
    where: tagWhereUniqueInput
    create: XOR<tagCreateWithoutStudent_tagInput, tagUncheckedCreateWithoutStudent_tagInput>
  }

  export type studentCreateWithoutStudent_tagInput = {
    user_parent: user_parentCreateNestedOneWithoutStudentInput
    course_of_study_student_course_of_studyTocourse_of_study: course_of_studyCreateNestedOneWithoutStudent_student_course_of_studyTocourse_of_studyInput
  }

  export type studentUncheckedCreateWithoutStudent_tagInput = {
    student_id: number
    course_of_study: string
  }

  export type studentCreateOrConnectWithoutStudent_tagInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutStudent_tagInput, studentUncheckedCreateWithoutStudent_tagInput>
  }

  export type tagUpsertWithoutStudent_tagInput = {
    update: XOR<tagUpdateWithoutStudent_tagInput, tagUncheckedUpdateWithoutStudent_tagInput>
    create: XOR<tagCreateWithoutStudent_tagInput, tagUncheckedCreateWithoutStudent_tagInput>
    where?: tagWhereInput
  }

  export type tagUpdateToOneWithWhereWithoutStudent_tagInput = {
    where?: tagWhereInput
    data: XOR<tagUpdateWithoutStudent_tagInput, tagUncheckedUpdateWithoutStudent_tagInput>
  }

  export type tagUpdateWithoutStudent_tagInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    thesis_proposal_tag?: thesis_proposal_tagUpdateManyWithoutTagNestedInput
  }

  export type tagUncheckedUpdateWithoutStudent_tagInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    thesis_proposal_tag?: thesis_proposal_tagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type studentUpsertWithoutStudent_tagInput = {
    update: XOR<studentUpdateWithoutStudent_tagInput, studentUncheckedUpdateWithoutStudent_tagInput>
    create: XOR<studentCreateWithoutStudent_tagInput, studentUncheckedCreateWithoutStudent_tagInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutStudent_tagInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutStudent_tagInput, studentUncheckedUpdateWithoutStudent_tagInput>
  }

  export type studentUpdateWithoutStudent_tagInput = {
    user_parent?: user_parentUpdateOneRequiredWithoutStudentNestedInput
    course_of_study_student_course_of_studyTocourse_of_study?: course_of_studyUpdateOneRequiredWithoutStudent_student_course_of_studyTocourse_of_studyNestedInput
  }

  export type studentUncheckedUpdateWithoutStudent_tagInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    course_of_study?: StringFieldUpdateOperationsInput | string
  }

  export type user_parentCreateWithoutSupervisorInput = {
    name: string
    surname: string
    role: string
    uni_email: string
    photo?: Uint8Array | null
    password_hash: string
    birthdate?: Date | string | null
    gender?: string | null
    timespent: bigint | number
    reg_date: Date | string
    student?: studentCreateNestedOneWithoutUser_parentInput
    faculty: facultyCreateNestedOneWithoutUser_parentInput
  }

  export type user_parentUncheckedCreateWithoutSupervisorInput = {
    user_id?: number
    name: string
    surname: string
    role: string
    uni_email: string
    photo?: Uint8Array | null
    faculty_name: string
    password_hash: string
    birthdate?: Date | string | null
    gender?: string | null
    timespent: bigint | number
    reg_date: Date | string
    student?: studentUncheckedCreateNestedOneWithoutUser_parentInput
  }

  export type user_parentCreateOrConnectWithoutSupervisorInput = {
    where: user_parentWhereUniqueInput
    create: XOR<user_parentCreateWithoutSupervisorInput, user_parentUncheckedCreateWithoutSupervisorInput>
  }

  export type thesis_proposalCreateWithoutSupervisorInput = {
    title: string
    description: string
    requirements?: string | null
    thesis_type: string
    application_start?: Date | string | null
    application_end?: Date | string | null
    thesis_start?: Date | string | null
    thesis_end?: Date | string | null
    thesis_proposal_tag?: thesis_proposal_tagCreateNestedManyWithoutThesis_proposalInput
  }

  export type thesis_proposalUncheckedCreateWithoutSupervisorInput = {
    thesis_id?: number
    title: string
    description: string
    requirements?: string | null
    thesis_type: string
    application_start?: Date | string | null
    application_end?: Date | string | null
    thesis_start?: Date | string | null
    thesis_end?: Date | string | null
    thesis_proposal_tag?: thesis_proposal_tagUncheckedCreateNestedManyWithoutThesis_proposalInput
  }

  export type thesis_proposalCreateOrConnectWithoutSupervisorInput = {
    where: thesis_proposalWhereUniqueInput
    create: XOR<thesis_proposalCreateWithoutSupervisorInput, thesis_proposalUncheckedCreateWithoutSupervisorInput>
  }

  export type thesis_proposalCreateManySupervisorInputEnvelope = {
    data: thesis_proposalCreateManySupervisorInput | thesis_proposalCreateManySupervisorInput[]
    skipDuplicates?: boolean
  }

  export type user_parentUpsertWithoutSupervisorInput = {
    update: XOR<user_parentUpdateWithoutSupervisorInput, user_parentUncheckedUpdateWithoutSupervisorInput>
    create: XOR<user_parentCreateWithoutSupervisorInput, user_parentUncheckedCreateWithoutSupervisorInput>
    where?: user_parentWhereInput
  }

  export type user_parentUpdateToOneWithWhereWithoutSupervisorInput = {
    where?: user_parentWhereInput
    data: XOR<user_parentUpdateWithoutSupervisorInput, user_parentUncheckedUpdateWithoutSupervisorInput>
  }

  export type user_parentUpdateWithoutSupervisorInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    uni_email?: StringFieldUpdateOperationsInput | string
    photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    password_hash?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: BigIntFieldUpdateOperationsInput | bigint | number
    reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: studentUpdateOneWithoutUser_parentNestedInput
    faculty?: facultyUpdateOneRequiredWithoutUser_parentNestedInput
  }

  export type user_parentUncheckedUpdateWithoutSupervisorInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    uni_email?: StringFieldUpdateOperationsInput | string
    photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    faculty_name?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: BigIntFieldUpdateOperationsInput | bigint | number
    reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: studentUncheckedUpdateOneWithoutUser_parentNestedInput
  }

  export type thesis_proposalUpsertWithWhereUniqueWithoutSupervisorInput = {
    where: thesis_proposalWhereUniqueInput
    update: XOR<thesis_proposalUpdateWithoutSupervisorInput, thesis_proposalUncheckedUpdateWithoutSupervisorInput>
    create: XOR<thesis_proposalCreateWithoutSupervisorInput, thesis_proposalUncheckedCreateWithoutSupervisorInput>
  }

  export type thesis_proposalUpdateWithWhereUniqueWithoutSupervisorInput = {
    where: thesis_proposalWhereUniqueInput
    data: XOR<thesis_proposalUpdateWithoutSupervisorInput, thesis_proposalUncheckedUpdateWithoutSupervisorInput>
  }

  export type thesis_proposalUpdateManyWithWhereWithoutSupervisorInput = {
    where: thesis_proposalScalarWhereInput
    data: XOR<thesis_proposalUpdateManyMutationInput, thesis_proposalUncheckedUpdateManyWithoutSupervisorInput>
  }

  export type thesis_proposalScalarWhereInput = {
    AND?: thesis_proposalScalarWhereInput | thesis_proposalScalarWhereInput[]
    OR?: thesis_proposalScalarWhereInput[]
    NOT?: thesis_proposalScalarWhereInput | thesis_proposalScalarWhereInput[]
    thesis_id?: IntFilter<"thesis_proposal"> | number
    title?: StringFilter<"thesis_proposal"> | string
    description?: StringFilter<"thesis_proposal"> | string
    supervisor_id?: IntFilter<"thesis_proposal"> | number
    requirements?: StringNullableFilter<"thesis_proposal"> | string | null
    thesis_type?: StringFilter<"thesis_proposal"> | string
    application_start?: DateTimeNullableFilter<"thesis_proposal"> | Date | string | null
    application_end?: DateTimeNullableFilter<"thesis_proposal"> | Date | string | null
    thesis_start?: DateTimeNullableFilter<"thesis_proposal"> | Date | string | null
    thesis_end?: DateTimeNullableFilter<"thesis_proposal"> | Date | string | null
  }

  export type student_tagCreateWithoutTagInput = {
    student: studentCreateNestedOneWithoutStudent_tagInput
  }

  export type student_tagUncheckedCreateWithoutTagInput = {
    student_id: number
  }

  export type student_tagCreateOrConnectWithoutTagInput = {
    where: student_tagWhereUniqueInput
    create: XOR<student_tagCreateWithoutTagInput, student_tagUncheckedCreateWithoutTagInput>
  }

  export type student_tagCreateManyTagInputEnvelope = {
    data: student_tagCreateManyTagInput | student_tagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type thesis_proposal_tagCreateWithoutTagInput = {
    thesis_proposal: thesis_proposalCreateNestedOneWithoutThesis_proposal_tagInput
  }

  export type thesis_proposal_tagUncheckedCreateWithoutTagInput = {
    thesis_id: number
  }

  export type thesis_proposal_tagCreateOrConnectWithoutTagInput = {
    where: thesis_proposal_tagWhereUniqueInput
    create: XOR<thesis_proposal_tagCreateWithoutTagInput, thesis_proposal_tagUncheckedCreateWithoutTagInput>
  }

  export type thesis_proposal_tagCreateManyTagInputEnvelope = {
    data: thesis_proposal_tagCreateManyTagInput | thesis_proposal_tagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type student_tagUpsertWithWhereUniqueWithoutTagInput = {
    where: student_tagWhereUniqueInput
    update: XOR<student_tagUpdateWithoutTagInput, student_tagUncheckedUpdateWithoutTagInput>
    create: XOR<student_tagCreateWithoutTagInput, student_tagUncheckedCreateWithoutTagInput>
  }

  export type student_tagUpdateWithWhereUniqueWithoutTagInput = {
    where: student_tagWhereUniqueInput
    data: XOR<student_tagUpdateWithoutTagInput, student_tagUncheckedUpdateWithoutTagInput>
  }

  export type student_tagUpdateManyWithWhereWithoutTagInput = {
    where: student_tagScalarWhereInput
    data: XOR<student_tagUpdateManyMutationInput, student_tagUncheckedUpdateManyWithoutTagInput>
  }

  export type thesis_proposal_tagUpsertWithWhereUniqueWithoutTagInput = {
    where: thesis_proposal_tagWhereUniqueInput
    update: XOR<thesis_proposal_tagUpdateWithoutTagInput, thesis_proposal_tagUncheckedUpdateWithoutTagInput>
    create: XOR<thesis_proposal_tagCreateWithoutTagInput, thesis_proposal_tagUncheckedCreateWithoutTagInput>
  }

  export type thesis_proposal_tagUpdateWithWhereUniqueWithoutTagInput = {
    where: thesis_proposal_tagWhereUniqueInput
    data: XOR<thesis_proposal_tagUpdateWithoutTagInput, thesis_proposal_tagUncheckedUpdateWithoutTagInput>
  }

  export type thesis_proposal_tagUpdateManyWithWhereWithoutTagInput = {
    where: thesis_proposal_tagScalarWhereInput
    data: XOR<thesis_proposal_tagUpdateManyMutationInput, thesis_proposal_tagUncheckedUpdateManyWithoutTagInput>
  }

  export type thesis_proposal_tagScalarWhereInput = {
    AND?: thesis_proposal_tagScalarWhereInput | thesis_proposal_tagScalarWhereInput[]
    OR?: thesis_proposal_tagScalarWhereInput[]
    NOT?: thesis_proposal_tagScalarWhereInput | thesis_proposal_tagScalarWhereInput[]
    tag_name?: StringFilter<"thesis_proposal_tag"> | string
    thesis_id?: IntFilter<"thesis_proposal_tag"> | number
  }

  export type supervisorCreateWithoutThesis_proposalInput = {
    vita?: string | null
    way_of_working?: string | null
    profile_tha?: string | null
    user_parent: user_parentCreateNestedOneWithoutSupervisorInput
  }

  export type supervisorUncheckedCreateWithoutThesis_proposalInput = {
    supervisor_id: number
    vita?: string | null
    way_of_working?: string | null
    profile_tha?: string | null
  }

  export type supervisorCreateOrConnectWithoutThesis_proposalInput = {
    where: supervisorWhereUniqueInput
    create: XOR<supervisorCreateWithoutThesis_proposalInput, supervisorUncheckedCreateWithoutThesis_proposalInput>
  }

  export type thesis_proposal_tagCreateWithoutThesis_proposalInput = {
    tag: tagCreateNestedOneWithoutThesis_proposal_tagInput
  }

  export type thesis_proposal_tagUncheckedCreateWithoutThesis_proposalInput = {
    tag_name: string
  }

  export type thesis_proposal_tagCreateOrConnectWithoutThesis_proposalInput = {
    where: thesis_proposal_tagWhereUniqueInput
    create: XOR<thesis_proposal_tagCreateWithoutThesis_proposalInput, thesis_proposal_tagUncheckedCreateWithoutThesis_proposalInput>
  }

  export type thesis_proposal_tagCreateManyThesis_proposalInputEnvelope = {
    data: thesis_proposal_tagCreateManyThesis_proposalInput | thesis_proposal_tagCreateManyThesis_proposalInput[]
    skipDuplicates?: boolean
  }

  export type supervisorUpsertWithoutThesis_proposalInput = {
    update: XOR<supervisorUpdateWithoutThesis_proposalInput, supervisorUncheckedUpdateWithoutThesis_proposalInput>
    create: XOR<supervisorCreateWithoutThesis_proposalInput, supervisorUncheckedCreateWithoutThesis_proposalInput>
    where?: supervisorWhereInput
  }

  export type supervisorUpdateToOneWithWhereWithoutThesis_proposalInput = {
    where?: supervisorWhereInput
    data: XOR<supervisorUpdateWithoutThesis_proposalInput, supervisorUncheckedUpdateWithoutThesis_proposalInput>
  }

  export type supervisorUpdateWithoutThesis_proposalInput = {
    vita?: NullableStringFieldUpdateOperationsInput | string | null
    way_of_working?: NullableStringFieldUpdateOperationsInput | string | null
    profile_tha?: NullableStringFieldUpdateOperationsInput | string | null
    user_parent?: user_parentUpdateOneRequiredWithoutSupervisorNestedInput
  }

  export type supervisorUncheckedUpdateWithoutThesis_proposalInput = {
    supervisor_id?: IntFieldUpdateOperationsInput | number
    vita?: NullableStringFieldUpdateOperationsInput | string | null
    way_of_working?: NullableStringFieldUpdateOperationsInput | string | null
    profile_tha?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type thesis_proposal_tagUpsertWithWhereUniqueWithoutThesis_proposalInput = {
    where: thesis_proposal_tagWhereUniqueInput
    update: XOR<thesis_proposal_tagUpdateWithoutThesis_proposalInput, thesis_proposal_tagUncheckedUpdateWithoutThesis_proposalInput>
    create: XOR<thesis_proposal_tagCreateWithoutThesis_proposalInput, thesis_proposal_tagUncheckedCreateWithoutThesis_proposalInput>
  }

  export type thesis_proposal_tagUpdateWithWhereUniqueWithoutThesis_proposalInput = {
    where: thesis_proposal_tagWhereUniqueInput
    data: XOR<thesis_proposal_tagUpdateWithoutThesis_proposalInput, thesis_proposal_tagUncheckedUpdateWithoutThesis_proposalInput>
  }

  export type thesis_proposal_tagUpdateManyWithWhereWithoutThesis_proposalInput = {
    where: thesis_proposal_tagScalarWhereInput
    data: XOR<thesis_proposal_tagUpdateManyMutationInput, thesis_proposal_tagUncheckedUpdateManyWithoutThesis_proposalInput>
  }

  export type tagCreateWithoutThesis_proposal_tagInput = {
    tag_name: string
    student_tag?: student_tagCreateNestedManyWithoutTagInput
  }

  export type tagUncheckedCreateWithoutThesis_proposal_tagInput = {
    tag_name: string
    student_tag?: student_tagUncheckedCreateNestedManyWithoutTagInput
  }

  export type tagCreateOrConnectWithoutThesis_proposal_tagInput = {
    where: tagWhereUniqueInput
    create: XOR<tagCreateWithoutThesis_proposal_tagInput, tagUncheckedCreateWithoutThesis_proposal_tagInput>
  }

  export type thesis_proposalCreateWithoutThesis_proposal_tagInput = {
    title: string
    description: string
    requirements?: string | null
    thesis_type: string
    application_start?: Date | string | null
    application_end?: Date | string | null
    thesis_start?: Date | string | null
    thesis_end?: Date | string | null
    supervisor: supervisorCreateNestedOneWithoutThesis_proposalInput
  }

  export type thesis_proposalUncheckedCreateWithoutThesis_proposal_tagInput = {
    thesis_id?: number
    title: string
    description: string
    supervisor_id: number
    requirements?: string | null
    thesis_type: string
    application_start?: Date | string | null
    application_end?: Date | string | null
    thesis_start?: Date | string | null
    thesis_end?: Date | string | null
  }

  export type thesis_proposalCreateOrConnectWithoutThesis_proposal_tagInput = {
    where: thesis_proposalWhereUniqueInput
    create: XOR<thesis_proposalCreateWithoutThesis_proposal_tagInput, thesis_proposalUncheckedCreateWithoutThesis_proposal_tagInput>
  }

  export type tagUpsertWithoutThesis_proposal_tagInput = {
    update: XOR<tagUpdateWithoutThesis_proposal_tagInput, tagUncheckedUpdateWithoutThesis_proposal_tagInput>
    create: XOR<tagCreateWithoutThesis_proposal_tagInput, tagUncheckedCreateWithoutThesis_proposal_tagInput>
    where?: tagWhereInput
  }

  export type tagUpdateToOneWithWhereWithoutThesis_proposal_tagInput = {
    where?: tagWhereInput
    data: XOR<tagUpdateWithoutThesis_proposal_tagInput, tagUncheckedUpdateWithoutThesis_proposal_tagInput>
  }

  export type tagUpdateWithoutThesis_proposal_tagInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    student_tag?: student_tagUpdateManyWithoutTagNestedInput
  }

  export type tagUncheckedUpdateWithoutThesis_proposal_tagInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
    student_tag?: student_tagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type thesis_proposalUpsertWithoutThesis_proposal_tagInput = {
    update: XOR<thesis_proposalUpdateWithoutThesis_proposal_tagInput, thesis_proposalUncheckedUpdateWithoutThesis_proposal_tagInput>
    create: XOR<thesis_proposalCreateWithoutThesis_proposal_tagInput, thesis_proposalUncheckedCreateWithoutThesis_proposal_tagInput>
    where?: thesis_proposalWhereInput
  }

  export type thesis_proposalUpdateToOneWithWhereWithoutThesis_proposal_tagInput = {
    where?: thesis_proposalWhereInput
    data: XOR<thesis_proposalUpdateWithoutThesis_proposal_tagInput, thesis_proposalUncheckedUpdateWithoutThesis_proposal_tagInput>
  }

  export type thesis_proposalUpdateWithoutThesis_proposal_tagInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    thesis_type?: StringFieldUpdateOperationsInput | string
    application_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    application_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    supervisor?: supervisorUpdateOneRequiredWithoutThesis_proposalNestedInput
  }

  export type thesis_proposalUncheckedUpdateWithoutThesis_proposal_tagInput = {
    thesis_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    supervisor_id?: IntFieldUpdateOperationsInput | number
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    thesis_type?: StringFieldUpdateOperationsInput | string
    application_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    application_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type studentCreateWithoutUser_parentInput = {
    course_of_study_student_course_of_studyTocourse_of_study: course_of_studyCreateNestedOneWithoutStudent_student_course_of_studyTocourse_of_studyInput
    student_tag?: student_tagCreateNestedManyWithoutStudentInput
  }

  export type studentUncheckedCreateWithoutUser_parentInput = {
    course_of_study: string
    student_tag?: student_tagUncheckedCreateNestedManyWithoutStudentInput
  }

  export type studentCreateOrConnectWithoutUser_parentInput = {
    where: studentWhereUniqueInput
    create: XOR<studentCreateWithoutUser_parentInput, studentUncheckedCreateWithoutUser_parentInput>
  }

  export type supervisorCreateWithoutUser_parentInput = {
    vita?: string | null
    way_of_working?: string | null
    profile_tha?: string | null
    thesis_proposal?: thesis_proposalCreateNestedManyWithoutSupervisorInput
  }

  export type supervisorUncheckedCreateWithoutUser_parentInput = {
    vita?: string | null
    way_of_working?: string | null
    profile_tha?: string | null
    thesis_proposal?: thesis_proposalUncheckedCreateNestedManyWithoutSupervisorInput
  }

  export type supervisorCreateOrConnectWithoutUser_parentInput = {
    where: supervisorWhereUniqueInput
    create: XOR<supervisorCreateWithoutUser_parentInput, supervisorUncheckedCreateWithoutUser_parentInput>
  }

  export type facultyCreateWithoutUser_parentInput = {
    faculty_name: string
    course_of_study?: course_of_studyCreateNestedManyWithoutFacultyInput
  }

  export type facultyUncheckedCreateWithoutUser_parentInput = {
    faculty_name: string
    course_of_study?: course_of_studyUncheckedCreateNestedManyWithoutFacultyInput
  }

  export type facultyCreateOrConnectWithoutUser_parentInput = {
    where: facultyWhereUniqueInput
    create: XOR<facultyCreateWithoutUser_parentInput, facultyUncheckedCreateWithoutUser_parentInput>
  }

  export type studentUpsertWithoutUser_parentInput = {
    update: XOR<studentUpdateWithoutUser_parentInput, studentUncheckedUpdateWithoutUser_parentInput>
    create: XOR<studentCreateWithoutUser_parentInput, studentUncheckedCreateWithoutUser_parentInput>
    where?: studentWhereInput
  }

  export type studentUpdateToOneWithWhereWithoutUser_parentInput = {
    where?: studentWhereInput
    data: XOR<studentUpdateWithoutUser_parentInput, studentUncheckedUpdateWithoutUser_parentInput>
  }

  export type studentUpdateWithoutUser_parentInput = {
    course_of_study_student_course_of_studyTocourse_of_study?: course_of_studyUpdateOneRequiredWithoutStudent_student_course_of_studyTocourse_of_studyNestedInput
    student_tag?: student_tagUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutUser_parentInput = {
    course_of_study?: StringFieldUpdateOperationsInput | string
    student_tag?: student_tagUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type supervisorUpsertWithoutUser_parentInput = {
    update: XOR<supervisorUpdateWithoutUser_parentInput, supervisorUncheckedUpdateWithoutUser_parentInput>
    create: XOR<supervisorCreateWithoutUser_parentInput, supervisorUncheckedCreateWithoutUser_parentInput>
    where?: supervisorWhereInput
  }

  export type supervisorUpdateToOneWithWhereWithoutUser_parentInput = {
    where?: supervisorWhereInput
    data: XOR<supervisorUpdateWithoutUser_parentInput, supervisorUncheckedUpdateWithoutUser_parentInput>
  }

  export type supervisorUpdateWithoutUser_parentInput = {
    vita?: NullableStringFieldUpdateOperationsInput | string | null
    way_of_working?: NullableStringFieldUpdateOperationsInput | string | null
    profile_tha?: NullableStringFieldUpdateOperationsInput | string | null
    thesis_proposal?: thesis_proposalUpdateManyWithoutSupervisorNestedInput
  }

  export type supervisorUncheckedUpdateWithoutUser_parentInput = {
    vita?: NullableStringFieldUpdateOperationsInput | string | null
    way_of_working?: NullableStringFieldUpdateOperationsInput | string | null
    profile_tha?: NullableStringFieldUpdateOperationsInput | string | null
    thesis_proposal?: thesis_proposalUncheckedUpdateManyWithoutSupervisorNestedInput
  }

  export type facultyUpsertWithoutUser_parentInput = {
    update: XOR<facultyUpdateWithoutUser_parentInput, facultyUncheckedUpdateWithoutUser_parentInput>
    create: XOR<facultyCreateWithoutUser_parentInput, facultyUncheckedCreateWithoutUser_parentInput>
    where?: facultyWhereInput
  }

  export type facultyUpdateToOneWithWhereWithoutUser_parentInput = {
    where?: facultyWhereInput
    data: XOR<facultyUpdateWithoutUser_parentInput, facultyUncheckedUpdateWithoutUser_parentInput>
  }

  export type facultyUpdateWithoutUser_parentInput = {
    faculty_name?: StringFieldUpdateOperationsInput | string
    course_of_study?: course_of_studyUpdateManyWithoutFacultyNestedInput
  }

  export type facultyUncheckedUpdateWithoutUser_parentInput = {
    faculty_name?: StringFieldUpdateOperationsInput | string
    course_of_study?: course_of_studyUncheckedUpdateManyWithoutFacultyNestedInput
  }

  export type studentCreateManyCourse_of_study_student_course_of_studyTocourse_of_studyInput = {
    student_id: number
  }

  export type studentUpdateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput = {
    user_parent?: user_parentUpdateOneRequiredWithoutStudentNestedInput
    student_tag?: student_tagUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    student_tag?: student_tagUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type studentUncheckedUpdateManyWithoutCourse_of_study_student_course_of_studyTocourse_of_studyInput = {
    student_id?: IntFieldUpdateOperationsInput | number
  }

  export type course_of_studyCreateManyFacultyInput = {
    course_name: string
  }

  export type user_parentCreateManyFacultyInput = {
    user_id?: number
    name: string
    surname: string
    role: string
    uni_email: string
    photo?: Uint8Array | null
    password_hash: string
    birthdate?: Date | string | null
    gender?: string | null
    timespent: bigint | number
    reg_date: Date | string
  }

  export type course_of_studyUpdateWithoutFacultyInput = {
    course_name?: StringFieldUpdateOperationsInput | string
    student_student_course_of_studyTocourse_of_study?: studentUpdateManyWithoutCourse_of_study_student_course_of_studyTocourse_of_studyNestedInput
  }

  export type course_of_studyUncheckedUpdateWithoutFacultyInput = {
    course_name?: StringFieldUpdateOperationsInput | string
    student_student_course_of_studyTocourse_of_study?: studentUncheckedUpdateManyWithoutCourse_of_study_student_course_of_studyTocourse_of_studyNestedInput
  }

  export type course_of_studyUncheckedUpdateManyWithoutFacultyInput = {
    course_name?: StringFieldUpdateOperationsInput | string
  }

  export type user_parentUpdateWithoutFacultyInput = {
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    uni_email?: StringFieldUpdateOperationsInput | string
    photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    password_hash?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: BigIntFieldUpdateOperationsInput | bigint | number
    reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: studentUpdateOneWithoutUser_parentNestedInput
    supervisor?: supervisorUpdateOneWithoutUser_parentNestedInput
  }

  export type user_parentUncheckedUpdateWithoutFacultyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    uni_email?: StringFieldUpdateOperationsInput | string
    photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    password_hash?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: BigIntFieldUpdateOperationsInput | bigint | number
    reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: studentUncheckedUpdateOneWithoutUser_parentNestedInput
    supervisor?: supervisorUncheckedUpdateOneWithoutUser_parentNestedInput
  }

  export type user_parentUncheckedUpdateManyWithoutFacultyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    uni_email?: StringFieldUpdateOperationsInput | string
    photo?: NullableBytesFieldUpdateOperationsInput | Uint8Array | null
    password_hash?: StringFieldUpdateOperationsInput | string
    birthdate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    timespent?: BigIntFieldUpdateOperationsInput | bigint | number
    reg_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type student_tagCreateManyStudentInput = {
    tag_name: string
  }

  export type student_tagUpdateWithoutStudentInput = {
    tag?: tagUpdateOneRequiredWithoutStudent_tagNestedInput
  }

  export type student_tagUncheckedUpdateWithoutStudentInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
  }

  export type student_tagUncheckedUpdateManyWithoutStudentInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
  }

  export type thesis_proposalCreateManySupervisorInput = {
    thesis_id?: number
    title: string
    description: string
    requirements?: string | null
    thesis_type: string
    application_start?: Date | string | null
    application_end?: Date | string | null
    thesis_start?: Date | string | null
    thesis_end?: Date | string | null
  }

  export type thesis_proposalUpdateWithoutSupervisorInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    thesis_type?: StringFieldUpdateOperationsInput | string
    application_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    application_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_proposal_tag?: thesis_proposal_tagUpdateManyWithoutThesis_proposalNestedInput
  }

  export type thesis_proposalUncheckedUpdateWithoutSupervisorInput = {
    thesis_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    thesis_type?: StringFieldUpdateOperationsInput | string
    application_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    application_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_proposal_tag?: thesis_proposal_tagUncheckedUpdateManyWithoutThesis_proposalNestedInput
  }

  export type thesis_proposalUncheckedUpdateManyWithoutSupervisorInput = {
    thesis_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    thesis_type?: StringFieldUpdateOperationsInput | string
    application_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    application_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    thesis_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type student_tagCreateManyTagInput = {
    student_id: number
  }

  export type thesis_proposal_tagCreateManyTagInput = {
    thesis_id: number
  }

  export type student_tagUpdateWithoutTagInput = {
    student?: studentUpdateOneRequiredWithoutStudent_tagNestedInput
  }

  export type student_tagUncheckedUpdateWithoutTagInput = {
    student_id?: IntFieldUpdateOperationsInput | number
  }

  export type student_tagUncheckedUpdateManyWithoutTagInput = {
    student_id?: IntFieldUpdateOperationsInput | number
  }

  export type thesis_proposal_tagUpdateWithoutTagInput = {
    thesis_proposal?: thesis_proposalUpdateOneRequiredWithoutThesis_proposal_tagNestedInput
  }

  export type thesis_proposal_tagUncheckedUpdateWithoutTagInput = {
    thesis_id?: IntFieldUpdateOperationsInput | number
  }

  export type thesis_proposal_tagUncheckedUpdateManyWithoutTagInput = {
    thesis_id?: IntFieldUpdateOperationsInput | number
  }

  export type thesis_proposal_tagCreateManyThesis_proposalInput = {
    tag_name: string
  }

  export type thesis_proposal_tagUpdateWithoutThesis_proposalInput = {
    tag?: tagUpdateOneRequiredWithoutThesis_proposal_tagNestedInput
  }

  export type thesis_proposal_tagUncheckedUpdateWithoutThesis_proposalInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
  }

  export type thesis_proposal_tagUncheckedUpdateManyWithoutThesis_proposalInput = {
    tag_name?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}