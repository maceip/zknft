<h1>quickstart tlsn notary inside sgx enclave</h1>
<h3>for development purposes only</h3>

```sh
#install SGX

sudo apt-get install build-essential ocaml ocamlbuild automake autoconf libtool wget python-is-python3 libssl-dev git cmake perl libcurl4-openssl-dev protobuf-compiler libprotobuf-dev debhelper cmake reprepro unzip pkgconf libboost-dev libboost-system-dev libboost-thread-dev lsb-release libsystemd0
git clone https://github.com/intel/linux-sgx.git
cd linux-sgx && make preparation
make sdk
make sdk_install_pkg
make psw
make deb_psw_pkg
make deb_local_repo
deb [trusted=yes arch=amd64] file:linux/installer/deb/sgx_debian_local_repo jammy main
sudo apt update
cd linux/installer/bin
./sgx_linux_x64_sdk_${version}.bin --prefix {SDK_INSTALL_PATH_PREFIX}

#install gramine

sudo curl -fsSLo /usr/share/keyrings/gramine-keyring.gpg https://packages.gramineproject.io/gramine-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/gramine-keyring.gpg] https://packages.gramineproject.io/ $(lsb_release -sc) main" \
| sudo tee /etc/apt/sources.list.d/gramine.list

sudo curl -fsSLo /usr/share/keyrings/intel-sgx-deb.asc https://download.01.org/intel-sgx/sgx_repo/ubuntu/intel-sgx-deb.key
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/intel-sgx-deb.asc] https://download.01.org/intel-sgx/sgx_repo/ubuntu $(lsb_release -sc) main" \
| sudo tee /etc/apt/sources.list.d/intel-sgx.list

sudo apt-get update
sudo apt-get install gramine

# build the notary and the final manifest

make SGX=1

# run the notary in Gramine-SGX

make SGX=1 start-gramine-server
```

To test with non-SGX Gramine instead, omit `SGX=1` in both commands.
