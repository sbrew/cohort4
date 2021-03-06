PGDMP     7                    x           comp-930    12.3    12.3 .    B           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            C           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            D           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            E           1262    24950    comp-930    DATABASE     �   CREATE DATABASE "comp-930" WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_Canada.1252' LC_CTYPE = 'English_Canada.1252';
    DROP DATABASE "comp-930";
                postgres    false            �            1259    24977 	   companies    TABLE     {   CREATE TABLE public.companies (
    company_code integer NOT NULL,
    name character varying,
    country_code integer
);
    DROP TABLE public.companies;
       public         heap    postgres    false            �            1259    24975    companies_company_code_seq    SEQUENCE     �   CREATE SEQUENCE public.companies_company_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.companies_company_code_seq;
       public          postgres    false    207            F           0    0    companies_company_code_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.companies_company_code_seq OWNED BY public.companies.company_code;
          public          postgres    false    206            �            1259    24988 	   countries    TABLE     a   CREATE TABLE public.countries (
    country_code integer NOT NULL,
    name character varying
);
    DROP TABLE public.countries;
       public         heap    postgres    false            �            1259    24986    countries_country_code_seq    SEQUENCE     �   CREATE SEQUENCE public.countries_country_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.countries_country_code_seq;
       public          postgres    false    209            G           0    0    countries_country_code_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.countries_country_code_seq OWNED BY public.countries.country_code;
          public          postgres    false    208            �            1259    24997    order_items    TABLE     r   CREATE TABLE public.order_items (
    order_id integer,
    product_id integer,
    quantity integer DEFAULT 1
);
    DROP TABLE public.order_items;
       public         heap    postgres    false            �            1259    25001    orders    TABLE       CREATE TABLE public.orders (
    payment_method character varying,
    order_id integer NOT NULL,
    payment_date timestamp without time zone,
    payment_amount numeric(5,2),
    user_id integer,
    status character varying,
    created_at character varying
);
    DROP TABLE public.orders;
       public         heap    postgres    false            �            1259    25039    orders_order_id_seq    SEQUENCE     �   ALTER TABLE public.orders ALTER COLUMN order_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.orders_order_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    211            �            1259    24966    product    TABLE     �   CREATE TABLE public.product (
    company_code integer,
    product_id integer NOT NULL,
    name character varying,
    inventory integer,
    history integer,
    cost integer,
    price integer
);
    DROP TABLE public.product;
       public         heap    postgres    false            �            1259    24964    product_product_id_seq    SEQUENCE     �   CREATE SEQUENCE public.product_product_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.product_product_id_seq;
       public          postgres    false    205            H           0    0    product_product_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.product_product_id_seq OWNED BY public.product.product_id;
          public          postgres    false    204            �            1259    24953    users    TABLE       CREATE TABLE public.users (
    user_id integer NOT NULL,
    full_name character varying NOT NULL,
    created_at timestamp without time zone,
    country_code integer,
    email character varying NOT NULL,
    address character varying NOT NULL,
    phone character varying
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    24951    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public          postgres    false    203            I           0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public          postgres    false    202            �
           2604    24980    companies company_code    DEFAULT     �   ALTER TABLE ONLY public.companies ALTER COLUMN company_code SET DEFAULT nextval('public.companies_company_code_seq'::regclass);
 E   ALTER TABLE public.companies ALTER COLUMN company_code DROP DEFAULT;
       public          postgres    false    206    207    207            �
           2604    24991    countries country_code    DEFAULT     �   ALTER TABLE ONLY public.countries ALTER COLUMN country_code SET DEFAULT nextval('public.countries_country_code_seq'::regclass);
 E   ALTER TABLE public.countries ALTER COLUMN country_code DROP DEFAULT;
       public          postgres    false    209    208    209            �
           2604    24969    product product_id    DEFAULT     x   ALTER TABLE ONLY public.product ALTER COLUMN product_id SET DEFAULT nextval('public.product_product_id_seq'::regclass);
 A   ALTER TABLE public.product ALTER COLUMN product_id DROP DEFAULT;
       public          postgres    false    205    204    205            �
           2604    24956    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    203    202    203            :          0    24977 	   companies 
   TABLE DATA           E   COPY public.companies (company_code, name, country_code) FROM stdin;
    public          postgres    false    207   �5       <          0    24988 	   countries 
   TABLE DATA           7   COPY public.countries (country_code, name) FROM stdin;
    public          postgres    false    209   �5       =          0    24997    order_items 
   TABLE DATA           E   COPY public.order_items (order_id, product_id, quantity) FROM stdin;
    public          postgres    false    210   "6       >          0    25001    orders 
   TABLE DATA           u   COPY public.orders (payment_method, order_id, payment_date, payment_amount, user_id, status, created_at) FROM stdin;
    public          postgres    false    211   �7       8          0    24966    product 
   TABLE DATA           b   COPY public.product (company_code, product_id, name, inventory, history, cost, price) FROM stdin;
    public          postgres    false    205   j?       6          0    24953    users 
   TABLE DATA           d   COPY public.users (user_id, full_name, created_at, country_code, email, address, phone) FROM stdin;
    public          postgres    false    203   �?       J           0    0    companies_company_code_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.companies_company_code_seq', 3, true);
          public          postgres    false    206            K           0    0    countries_country_code_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.countries_country_code_seq', 3, true);
          public          postgres    false    208            L           0    0    orders_order_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.orders_order_id_seq', 101, true);
          public          postgres    false    212            M           0    0    product_product_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.product_product_id_seq', 3, true);
          public          postgres    false    204            N           0    0    users_user_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.users_user_id_seq', 10, true);
          public          postgres    false    202            �
           2606    24985    companies companies_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_pkey PRIMARY KEY (company_code);
 B   ALTER TABLE ONLY public.companies DROP CONSTRAINT companies_pkey;
       public            postgres    false    207            �
           2606    24996    countries countries_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_pkey PRIMARY KEY (country_code);
 B   ALTER TABLE ONLY public.countries DROP CONSTRAINT countries_pkey;
       public            postgres    false    209            �
           2606    25008    orders orders_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_pkey PRIMARY KEY (order_id);
 <   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_pkey;
       public            postgres    false    211            �
           2606    24974    product product_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY (product_id);
 >   ALTER TABLE ONLY public.product DROP CONSTRAINT product_pkey;
       public            postgres    false    205            �
           2606    24963    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    203            �
           2606    24961    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    203            �
           2606    25014 %   companies companies_country_code_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_country_code_fkey FOREIGN KEY (country_code) REFERENCES public.countries(country_code);
 O   ALTER TABLE ONLY public.companies DROP CONSTRAINT companies_country_code_fkey;
       public          postgres    false    2734    209    207            �
           2606    25029 %   order_items order_items_order_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(order_id);
 O   ALTER TABLE ONLY public.order_items DROP CONSTRAINT order_items_order_id_fkey;
       public          postgres    false    2736    210    211            �
           2606    25024 '   order_items order_items_product_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.order_items
    ADD CONSTRAINT order_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.product(product_id);
 Q   ALTER TABLE ONLY public.order_items DROP CONSTRAINT order_items_product_id_fkey;
       public          postgres    false    2730    205    210            �
           2606    25034    orders orders_user_id_fkey    FK CONSTRAINT     ~   ALTER TABLE ONLY public.orders
    ADD CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 D   ALTER TABLE ONLY public.orders DROP CONSTRAINT orders_user_id_fkey;
       public          postgres    false    203    211    2728            �
           2606    25019 !   product product_company_code_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_company_code_fkey FOREIGN KEY (company_code) REFERENCES public.companies(company_code);
 K   ALTER TABLE ONLY public.product DROP CONSTRAINT product_company_code_fkey;
       public          postgres    false    2732    207    205            �
           2606    25009    users users_country_code_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_country_code_fkey FOREIGN KEY (country_code) REFERENCES public.countries(country_code);
 G   ALTER TABLE ONLY public.users DROP CONSTRAINT users_country_code_fkey;
       public          postgres    false    209    203    2734            :   *   x�3䌈��4�2�tL�M�4�2�O��M,*�4����� ���      <   *   x�3�tN�KLI�2�t,-.)J���L�2�*-.2b���� �F
6      =   �  x�-S˵�0[�b是���#����AB�ѓW���+���2���vy�QED����oI�s"UǢ����ҍ�uK&�|��m�ˍ���]BQUq^9�i2X��y/ap��E
��Q#%�f�y�̏)|d.����C`�{�Cʀ(�uJ�Ll����ĂК�l֬#iB�>ˣg�� ���UI�z2$4�k��=
��Tz��	 ��oŤ�h5��S�9��f��5xTc,�XGj<;h�4Լ	���U�w�2;(­�j��p�"���s7
z�uk����}�Iq������↥�.�&ۤ$�u	���l�>>}?�kUqҰ���m)j�� .�8�W墱\wPPd�|�7���62i9��ؒ\Я�ɀ���"�1K.      >   �  x��Y[n9��O���n��w/��E`mŐ�������NLʀ� �!��]]UM���<6BB[�[�v��IĦ�#E�,��sw��y���}w����{\�L[q����/��8���t�y8�lG4տ���_���I�'�)�.X����x|~�,���eK~#29?�brt6�󻓼Y�O�h�X�ȸ-g�tG�q�:o)m8MO�D�mIؾ��t]�Oʆy�I6.���뽓=���v���e��w&��ɖÆ��$8E�2�4JciU�F$a
� �(����i
��g��-G�����$������;���%1�JT������q��M/�_� ��O��I�C1)N<H���e�=<� �	pl0�K��Ǚ,l��G�e??r[vZl'�O� �%#���z�Ò�irn
@�/6���� �R(-���L�-��2�UM��4?�[�������9F䶼(u�,4H�(����� R�D� ������4ظ���.�&I���[�lH�uDRL�bE��:D:�r����D�"�08���x�m_O����Fܲ��
"I
zG�fe�{yn� #z��1!�Q�㶓��$�&�9o"p���Tb[NZ 50�XO`��zE�RX**`��X���=]��a�T��
t��+���������t���|�\���Z�r`�L�@&�ڎ��n�
�qW�CC��o�p��
���@UL���,�Vӣ��p�Nѐޗ(�RTD�LN��^���>�u+�����a�*z?��Р��	$V���P����<���[Y}�s�>Ap�	JTxB�!���=\�K��N`��LP6�kI���ԃ���o���ǈ3�
xj��gA!��PC�M��_��]�W�j��=Np*e�7��n�P)os�u������kmP[J&%%���>���e
�~8�@[4��U�Զ$������@D�5�Zݵ	��#�Pw��0�R��ݥ�;�^׿���Π�!�����r7_M���ǩ/��;����vQ��������&�iR�LB�,�%�������U`�z푏�&4o�f>H��`ƨ�n����pŨzR��E3�;������ʨ�/9��}wy9�ѽ_ѝ�
D��'��/���ݥq��Ri��׹�gt��6��Ģ-��ˉT�GM����eG�$$�n&CnQ�4�'�	*
��y#T��&ޤ>̖��Tb�)�Gn�4;���:���^��M��y�R��,:r,v�VR��x�FL
^��1E���;�k�9�wTFI�� +g�u̅7�|UݑѮ�ĥ��]����h�"�m��mz�qEoT�ٳ�#��u⏍]q5�$����5�5��\P��a��т\���#���z�A�� aPn��$���\֩P?*ŠB�^�s��VS����:d�HZ�{N���S�$V�@0�>?}lt�_t������b���Sh1��5��)�J?]�1��+5\U��Hh�5��?�zx�07�H�&�YSnF��ɀ��C1;����� ����,�*Ƞ!3��귃2n�������+'�(8��Y�Ϗ��'Y�D�������[ȮU8�Ǣ��[Ѐ����W7��P��")��)���cP�%�z�Gx�A'Wq��jU�^`�����b�|ci�j	g���ju�#@故����f���B��������*U���u^�m�BY����>�.�3^]���K�@z�$ictYf���׳20-�xu��^�i����*��X�7ñ�]e�{��Zd��p�٢ۮsNVC�KvM��i�����"u�����w%��CR`y��Q�{�8֜���e�T�� �������@��E\i!рZ��BiP�<_0a⤗����2������YDY����Ԝ���iˁ���H1�e�)WP      8   P   x�3�4�O,I-Rp�/)�I�440�4�4�4�2�4��/O��44��rZrssg�(��$s�q�r��qqq ��i      6   �  x���=r�0�k�(�� ����V2�3�ɰY�����'WH��˒������f��{rrѵ����Y��ʆ&XȲP��G<9b,�9cyJ8�;>z|���Oh����%<Ky�/m���E�?w�4
��ޫ&��Z�iȻ���a�a��y �9�J����^u�,Ҍh��zW�k/i��3p�2�ÉtZIW�S���	zC����~�ki���,h!h�1����?���CNb��6����f}|�Z:C'Ͽ]�ѵTx8��ж���]j��Ѻ�$",�$�Bke=Zv�-`#��s�?I5�SpK���`�w�~p2_n��H�P�<�"�AJ���!��-�}�3�Q��{I����/?z�S�2P�@姰F��edT�rA�$��I�`a�ց�]�F8jw�~)iRV���::�l��m�M�����/��(P�4�yƸ�99ѵtH�Bg��*`D�v ��3������I3ދ���}�����+�489a"(�)N�P���hm��d��heGtO9�Y�S�Y�G������P߮����+L<<L8O�%�pFv~�!��#-FtO9ae2�띚�P�I��g�����N,�aZ�0+cp�ECK�q�)Gd�k����3��m���`�Z�M'��-�g�o�te���ӒU�?�yC     